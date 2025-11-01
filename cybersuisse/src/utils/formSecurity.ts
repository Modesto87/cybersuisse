// Security utilities for form validation and sanitization
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitizedData?: any;
}

export interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  entreprise: string;
  service: string;
  budget: string;
  message: string;
  urgence: string;
}

// Sanitização de strings - remove caracteres perigosos
export const sanitizeString = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove caracteres de controle (0-31 e 127)
  let sanitized = '';
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (charCode >= 32 && charCode !== 127) {
      sanitized += input[i];
    }
  }
  
  return sanitized
    .trim()
    // Remove tags HTML
    .replace(/<[^>]*>/g, '')
    // Remove caracteres SQL injection comuns
    .replace(/['"`;\\]/g, '')
    // Remove caracteres JavaScript perigosos
    .replace(/[<>{}]/g, '')
    // Limita o tamanho
    .substring(0, 1000);
};

// Validação segura de email
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validação de telefone (formato internacional)
export const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Campo opcional
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
};

// Validação de nome (apenas letras, espaços, hífens)
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{1,50}$/;
  return nameRegex.test(name);
};

// Lista de palavras banidas (SQL injection, XSS, etc.)
const BLOCKED_WORDS = [
  'script', 'javascript:', 'vbscript:', 'onload', 'onerror', 'onclick',
  'select', 'insert', 'update', 'delete', 'drop', 'union', 'exec',
  'eval', 'expression', 'import', 'require', 'document.', 'window.',
  '<iframe', '<object', '<embed', '<form', 'data:text/html'
];

// Detecção de tentativas de injection
export const detectMaliciousContent = (input: string): boolean => {
  const lowerInput = input.toLowerCase();
  return BLOCKED_WORDS.some(word => lowerInput.includes(word));
};

// Rate limiting simples (client-side)
const submissions = new Map<string, number[]>();

export const checkRateLimit = (identifier: string): boolean => {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutos
  const maxRequests = 3; // Máximo 3 tentativas por 15 min
  
  if (!submissions.has(identifier)) {
    submissions.set(identifier, []);
  }
  
  const userSubmissions = submissions.get(identifier)!;
  // Remove submissions antigas
  const validSubmissions = userSubmissions.filter(time => now - time < windowMs);
  
  if (validSubmissions.length >= maxRequests) {
    return false; // Rate limit excedido
  }
  
  validSubmissions.push(now);
  submissions.set(identifier, validSubmissions);
  return true;
};

// Validação completa do formulário
export const validateFormData = (data: FormData, clientIP?: string): ValidationResult => {
  const errors: string[] = [];
  const sanitizedData: Partial<FormData> = {};

  // Verificar rate limiting
  const identifier = clientIP || 'anonymous';
  if (!checkRateLimit(identifier)) {
    return {
      isValid: false,
      errors: ['Trop de tentatives. Veuillez attendre 15 minutes.']
    };
  }

  // Validar e sanitizar prenom
  if (!data.prenom || data.prenom.trim().length === 0) {
    errors.push('Le prénom est requis.');
  } else if (!validateName(data.prenom)) {
    errors.push('Le prénom contient des caractères invalides.');
  } else if (detectMaliciousContent(data.prenom)) {
    errors.push('Contenu suspect détecté dans le prénom.');
  } else {
    sanitizedData.prenom = sanitizeString(data.prenom);
  }

  // Validar e sanitizar nom
  if (!data.nom || data.nom.trim().length === 0) {
    errors.push('Le nom est requis.');
  } else if (!validateName(data.nom)) {
    errors.push('Le nom contient des caractères invalides.');
  } else if (detectMaliciousContent(data.nom)) {
    errors.push('Contenu suspect détecté dans le nom.');
  } else {
    sanitizedData.nom = sanitizeString(data.nom);
  }

  // Validar e sanitizar email
  if (!data.email || data.email.trim().length === 0) {
    errors.push('L\'email est requis.');
  } else if (!validateEmail(data.email)) {
    errors.push('Format d\'email invalide.');
  } else if (detectMaliciousContent(data.email)) {
    errors.push('Contenu suspect détecté dans l\'email.');
  } else {
    sanitizedData.email = sanitizeString(data.email);
  }

  // Validar telefone (opcional)
  if (data.telephone && data.telephone.trim().length > 0) {
    if (!validatePhone(data.telephone)) {
      errors.push('Format de téléphone invalide.');
    } else if (detectMaliciousContent(data.telephone)) {
      errors.push('Contenu suspect détecté dans le téléphone.');
    } else {
      sanitizedData.telephone = sanitizeString(data.telephone);
    }
  }

  // Validar entreprise (opcional)
  if (data.entreprise && data.entreprise.trim().length > 0) {
    if (detectMaliciousContent(data.entreprise)) {
      errors.push('Contenu suspect détecté dans le nom d\'entreprise.');
    } else {
      sanitizedData.entreprise = sanitizeString(data.entreprise);
    }
  }

  // Validar service
  const validServices = [
    'pentest', 'surveillance', 'audit-cra', 'developpement', 
    'dfir', 'conseil', 'formation', 'autre'
  ];
  if (!data.service || !validServices.includes(data.service)) {
    errors.push('Service sélectionné invalide.');
  } else {
    sanitizedData.service = data.service;
  }

  // Validar budget
  const validBudgets = [
    'petit-projet', 'projet-moyen', 'grand-projet', 
    'projet-entreprise', 'a-discuter', 'devis-requis'
  ];
  if (data.budget && !validBudgets.includes(data.budget)) {
    errors.push('Budget sélectionné invalide.');
  } else {
    sanitizedData.budget = data.budget;
  }

  // Validar urgence
  const validUrgences = ['faible', 'normale', 'elevee', 'critique'];
  if (!data.urgence || !validUrgences.includes(data.urgence)) {
    errors.push('Niveau d\'urgence invalide.');
  } else {
    sanitizedData.urgence = data.urgence;
  }

  // Validar message
  if (!data.message || data.message.trim().length === 0) {
    errors.push('Le message est requis.');
  } else if (data.message.length > 5000) {
    errors.push('Le message est trop long (maximum 5000 caractères).');
  } else if (detectMaliciousContent(data.message)) {
    errors.push('Contenu suspect détecté dans le message.');
  } else {
    sanitizedData.message = sanitizeString(data.message);
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData: errors.length === 0 ? sanitizedData as FormData : undefined
  };
};

// Générer un token CSRF simple
export const generateCSRFToken = (): string => {
  return btoa(Date.now().toString() + Math.random().toString()).substring(0, 32);
};

// Valider token CSRF
export const validateCSRFToken = (token: string, timestamp: number): boolean => {
  const tokenAge = Date.now() - timestamp;
  const maxAge = 60 * 60 * 1000; // 1 heure
  
  return token.length === 32 && tokenAge < maxAge;
};
