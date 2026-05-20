$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$W = 1200; $H = 630
$bg = [System.Drawing.ColorTranslator]::FromHtml('#0b1220')
$white = [System.Drawing.ColorTranslator]::FromHtml('#ffffff')
$amber = [System.Drawing.ColorTranslator]::FromHtml('#f59e0b')
$muted = [System.Drawing.ColorTranslator]::FromHtml('#cbd5e1')

$bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.Clear($bg)

$logoPath = Join-Path $PSScriptRoot '..\src\assets\images\logo.png'
$logoH = 360
$padding = 80
$textX = $padding
try {
  $logo = [System.Drawing.Image]::FromFile((Resolve-Path $logoPath))
  $ratio = $logo.Width / $logo.Height
  $logoW = [int]($logoH * $ratio)
  $logoY = [int](($H - $logoH) / 2)
  $g.DrawImage($logo, $padding, $logoY, $logoW, $logoH)
  $logo.Dispose()
  $textX = $padding + $logoW + 60
} catch {
  Write-Warning "Logo not loaded: $_"
}

$fontTitle = New-Object System.Drawing.Font('Segoe UI', 48, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fontTag = New-Object System.Drawing.Font('Segoe UI', 30, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$fontLoc = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$brushWhite = New-Object System.Drawing.SolidBrush($white)
$brushAmber = New-Object System.Drawing.SolidBrush($amber)
$brushMuted = New-Object System.Drawing.SolidBrush($muted)

$line1 = 'CyberSuisse'
$line2 = [string]([char]0x43 + [char]0x79 + [char]0x62 + [char]0x65 + [char]0x72) + 'sécurité de proximité pour PME'
$line2 = "Cybersécurité de proximité pour PME"
$line3 = "Biel/Bienne · Suisse"

$y1 = 200
$h1 = $g.MeasureString($line1, $fontTitle).Height
$y2 = $y1 + $h1 + 20
$h2 = $g.MeasureString($line2, $fontTag).Height
$y3 = $y2 + $h2 + 20

$g.DrawString($line1, $fontTitle, $brushWhite, [float]$textX, [float]$y1)
$g.DrawString($line2, $fontTag, $brushAmber, [float]$textX, [float]$y2)
$g.DrawString($line3, $fontLoc, $brushMuted, [float]$textX, [float]$y3)

$encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]85)

$publicDir = (Resolve-Path (Join-Path $PSScriptRoot '..\public')).Path
$out1 = Join-Path $publicDir 'og-image.jpg'
$out2 = Join-Path $publicDir 'twitter-image.jpg'
$bmp.Save($out1, $encoder, $ep)
$bmp.Save($out2, $encoder, $ep)

$g.Dispose(); $bmp.Dispose()
Get-Item $out1, $out2 | Select-Object FullName, Length
