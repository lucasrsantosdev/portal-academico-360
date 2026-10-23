param([string]$Repo = "portal-academico-360", [string]$Owner = "")
$ErrorActionPreference = "Stop"
if (-not (Get-Command git -ErrorAction SilentlyContinue)) { throw "Instale Git for Windows." }
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) { throw "Instale GitHub CLI e execute gh auth login." }
gh auth status
if ($LASTEXITCODE -ne 0) { throw "Autentique no GitHub usando gh auth login." }
if (-not $Owner) { $Owner = (gh api user --jq .login).Trim() }
if (-not $Owner) { throw "Não foi possível identificar seu usuário do GitHub." }
if (-not (Test-Path .git)) { git init -b main }
git add .
if (git status --porcelain) { git commit -m "chore: import GitReverse and create academic portal demo" }
$remote = "https://github.com/$Owner/$Repo.git"
gh repo view "$Owner/$Repo" *> $null
if ($LASTEXITCODE -ne 0) { throw "Crie primeiro o repositório vazio $Owner/$Repo no GitHub; não foi criado automaticamente." }
git remote get-url origin *> $null
if ($LASTEXITCODE -eq 0) { Write-Host "Remoto origin existente: $(git remote get-url origin)"; throw "Confirme o remoto antes de prosseguir; nenhum push realizado." }
git remote add origin $remote
Write-Host "Repositório de destino: $remote"
$answer = Read-Host "Digite PUBLICAR para fazer git push -u origin main"
if ($answer -ne 'PUBLICAR') { Write-Host "Push cancelado."; exit 0 }
git push -u origin main
if ($LASTEXITCODE -ne 0) { throw "Falha ao publicar no GitHub." }
