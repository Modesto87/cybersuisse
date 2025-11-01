<?php
// Forçar resposta em JSON
header('Content-Type: application/json; charset=utf-8');

// Permitir requisições de qualquer origem (para desenvolvimento e produção)
// Em um ambiente de produção mais restrito, você pode substituir '*' pelo seu domínio específico.
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// O navegador envia uma requisição OPTIONS "pre-flight" para verificar as permissões de CORS.
// É seguro responder com 200 OK para que a requisição POST real possa prosseguir.
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Apenas permitir requisições do tipo POST.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // 405 Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Método não permitido.']);
    exit();
}

// --- Processamento do Formulário ---

// Obter o corpo da requisição JSON enviado pelo frontend.
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Verificar se o JSON foi decodificado corretamente.
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // 400 Bad Request
    echo json_encode(['status' => 'error', 'message' => 'JSON inválido.']);
    exit();
}

// --- Validação dos Dados (Servidor) ---
$errors = [];
if (empty($data['prenom'])) { $errors[] = 'Le prénom est requis.'; }
if (empty($data['nom'])) { $errors[] = 'Le nom est requis.'; }
if (empty($data['message'])) { $errors[] = 'Le message est requis.'; }
if (empty($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Format d\'email invalide.';
}

if (!empty($errors)) {
    http_response_code(400); // 400 Bad Request
    echo json_encode(['status' => 'error', 'message' => 'Données invalides.', 'errors' => $errors]);
    exit();
}

// --- Configuração do Email ---
$to_email = 'modesto@cybersuisse.ch';
$subject_prefix = 'Nouveau Message';
$from_email = 'no-reply@cybersuisse.ch'; // O email que você criou no Plesk.
$from_name = 'CyberSuisse Site';

// Sanitizar os dados para segurança antes de usá-los.
$prenom = htmlspecialchars($data['prenom']);
$nom = htmlspecialchars($data['nom']);
$reply_to_email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$telephone = htmlspecialchars($data['telephone'] ?: 'Non fourni');
$entreprise = htmlspecialchars($data['entreprise'] ?: 'Non fourni');
$service = htmlspecialchars($data['service'] ?: 'Non spécifié');
$budget = htmlspecialchars($data['budget'] ?: 'Non spécifié');
$urgence = htmlspecialchars($data['urgence'] ?: 'Normale');
$message_body = nl2br(htmlspecialchars($data['message'])); // Converte quebras de linha para <br>

// --- Montagem do Email ---
$subject = "[$subject_prefix - $urgence] De: $prenom $nom";
if ($entreprise !== 'Non fourni') {
    $subject .= " ($entreprise)";
}

// Tenta carregar o template HTML. Se falhar, usa um fallback.
$email_html_template = @file_get_contents('email-template.html');
if ($email_html_template === false) {
    $email_html_template = "
    <!DOCTYPE html><html><body>
    <h2>Nouveau message de contact</h2>
    <p><strong>Nom:</strong> {{nom}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Téléphone:</strong> {{telephone}}</p>
    <p><strong>Entreprise:</strong> {{entreprise}}</p>
    <p><strong>Service:</strong> {{service}}</p>
    <p><strong>Budget:</strong> {{budget}}</p>
    <p><strong>Urgence:</strong> {{urgence}}</p>
    <h3>Message:</h3>
    <div>{{message}}</div>
    </body></html>
    ";
}

// Substituir os placeholders pelos dados reais
$placeholders = [
    '{{nom}}'        => $prenom . ' ' . $nom,
    '{{email}}'      => $reply_to_email,
    '{{telephone}}'  => $telephone,
    '{{entreprise}}' => $entreprise,
    '{{service}}'    => $service,
    '{{budget}}'     => $budget,
    '{{urgence}}'    => ucfirst($urgence),
    '{{message}}'    => $message_body,
    '{{subject}}'    => $subject,
];
$email_body = str_replace(array_keys($placeholders), array_values($placeholders), $email_html_template);


// --- Envio do Email ---
$headers = [
    'MIME-Version' => '1.0',
    'Content-type' => 'text/html; charset=UTF-8',
    'From' => "$from_name <$from_email>",
    'Reply-To' => "$prenom $nom <$reply_to_email>",
    'X-Mailer' => 'PHP/' . phpversion()
];

if (mail($to_email, $subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode(['status' => 'success', 'message' => 'Email envoyé avec succès.']);
} else {
    http_response_code(500); // 500 Internal Server Error
    // Tenta capturar o último erro para depuração, se possível.
    $error = error_get_last();
    $error_message = 'Le serveur n\'a pas pu envoyer l\'email.';
    if ($error !== null) {
        $error_message .= " Détail: " . $error['message'];
    }
    echo json_encode(['status' => 'error', 'message' => $error_message]);
}
?>

