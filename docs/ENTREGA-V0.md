# Portal Acadêmico 360 — Entrega v0.1

## Escopo entregue

Aplicação **independente**, em React + Vite, com quatro módulos navegáveis:

1. **Dashboard**: saudação fictícia, atalhos, tarefas e progresso ilustrativo.
2. **Meu curso**: identificação fictícia de curso, situação e informações expansíveis.
3. **Disciplinas e notas**: filtros reais no frontend (situação, semestre e busca) e cartões de disciplinas simuladas.
4. **Financeiro**: atalhos de serviços com indicação honesta de indisponibilidade, filtro e histórico fictício de mensalidades.

Barra lateral responsiva, menu móvel, pesquisa no conteúdo da página, notificações fictícias e retorno entre seções.

## Execução no Windows

Na raiz do repositório:

```powershell
cd .\apps\web
npm.cmd install
npm.cmd run dev
```

Abrir o endereço local indicado pelo Vite (normalmente `http://127.0.0.1:5173`). Para validar a compilação:

```powershell
npm.cmd run build
```

## Preservação e reversão

Esta entrega **apenas adiciona** `apps/web/` e `docs/ENTREGA-V0.md` ao repositório. Não apaga `apps/portal-demo`, não modifica `tools/gitreverse`, nem exige mudar o README existente. Pode ser revertida removendo esses arquivos novos (preferencialmente após um commit específico).

## Limites conhecidos

- Sem login real, API, banco de dados, pagamentos, integrações acadêmicas ou aplicativo móvel.
- Todas as informações exibidas são fictícias e devem continuar assim até haver uma base legal e integrações institucionais autorizadas.
- A pesquisa é local ao conteúdo da tela, não é busca global real.
- A ação de todos os atalhos não implementados explica sua indisponibilidade; não há telas falsas simulando operação real.
- O gráfico de progresso é ilustrativo.

## Próxima versão

Adicionar API autorizada, PostgreSQL, autenticação com MFA, autorização por matrícula, auditoria, acessibilidade verificada, testes automatizados e aplicativo consumindo APIs comuns.

## Referências

As telas fornecidas pelo usuário do portal Anhanguera foram usadas somente para levantar categorias funcionais. Interface e identidade visual implementadas de forma independente.
