# Portal Acadêmico 360

> **Laboratório independente de desenvolvimento de uma plataforma acadêmica web, com evolução planejada para aplicativo móvel.** Projeto demonstrativo **não oficial**, sem vínculo ou integração autorizada com Anhanguera, UNIASSELVI ou outras instituições.

[Repositório no GitHub](https://github.com/lucasrsantosdev/portal-academico-360)

## 1. Visão e objetivo

Construir uma experiência acadêmica moderna, responsiva e acessível para estudantes, reunindo acompanhamento de curso, disciplinas e notas, serviços financeiros e, futuramente, secretaria, solicitações e ambiente virtual de aprendizagem (AVA). O desenvolvimento usa **implementação própria**, referências funcionais levantadas a partir de interfaces observadas e **dados totalmente fictícios**.

A arquitetura futura poderá atender web e aplicativo móvel por meio de serviços e API próprios, desde que as integrações com instituições sejam formalmente autorizadas.

## 2. Estado do projeto — 23/10/2026

| Componente | Situação verificada | Observação |
| --- | --- | --- |
| `apps/web` — Portal Acadêmico 360 v0.1 | **Implementado e iniciado localmente** | React 19, Vite 6, interface acessível em `http://127.0.0.1:5173` nas evidências da sessão |
| Dashboard / Início | **Demonstração implementada** | Saudação, atalhos e informações simuladas |
| Meu curso | **Demonstração implementada** | Informações e acompanhamento de matrícula fictícios |
| Disciplinas e notas | **Demonstração implementada** | Lista, médias e filtros demonstrativos |
| Financeiro | **Demonstração implementada** | Mensalidades, estados de pagamento e serviços simulados |
| `apps/portal-demo` | **Preservado** | Protótipo estático original em HTML, CSS e JavaScript |
| `tools/gitreverse` | **Preservado e executado localmente** | Ferramenta de terceiros; rota SSE corrigida localmente e publicada no commit `b13b17c` |
| Documentação funcional | **Levantamento parcial** | Quatro módulos em `docs/levantamento/` |
| API, banco de dados e autenticação própria | **Não implementados** | Etapa futura |
| Secretaria, solicitações e AVA | **Não implementados** | Apresentados como itens futuros na interface |
| Testes automatizados e build de produção da web | **Não comprovados pelo inventário** | Executar e registrar evidências separadamente |
| Aplicativo Android/iOS | **Não implementado** | Planejado após validação da web |

**Importante:** a v0.1 é um protótipo navegável com dados fictícios; não permite matrículas, pagamentos, emissão de documentos nem acesso a dados acadêmicos institucionais reais.

## 3. Arquitetura e estrutura atuais

```text
portal-academico-360/
├── apps/
│   ├── web/                         # Produto principal: React + Vite, v0.1
│   │   ├── src/
│   │   │   ├── main.jsx             # Interface e navegação
│   │   │   ├── data.js              # Dados fictícios da demonstração
│   │   │   └── style.css            # Estilos responsivos
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   └── vite.config.js
│   └── portal-demo/                 # Protótipo estático anterior
│       ├── index.html
│       ├── style.css
│       └── app.js
├── docs/
│   ├── ENTREGA-V0.md                # Escopo da primeira versão
│   ├── PLANO.md                     # Plano inicial
│   └── levantamento/
│       ├── HOME-001-dashboard.md
│       ├── CUR-001-meu-curso.md
│       ├── DISC-001-disciplinas.md
│       └── FIN-001-financeiro.md
├── tools/
│   └── gitreverse/                  # Ferramenta de terceiros, independente
├── .gitignore
├── publicar-github.ps1
└── README.md
```

**Ainda não existem** as pastas de produção `services/api`, `packages` ou `apps/mobile` neste repositório. Elas fazem parte apenas da arquitetura proposta.

### Tecnologias observadas

| Área | Tecnologia / versão declarada | Finalidade |
| --- | --- | --- |
| Portal web | React `^19.1.0`, React DOM `^19.1.0` | Interface do estudante |
| Build e desenvolvimento web | Vite `^6.4.0` | Servidor local e empacotamento |
| Ícones | `lucide-react` `^0.468.0` | Iconografia da interface |
| GitReverse | Next.js, TypeScript, React | Análise auxiliar de repositórios e sites públicos |
| Controle de versão | Git e GitHub | Histórico e publicação |

As versões listadas para a web são as declaradas no `package.json` da v0.1, não necessariamente as versões exatas instaladas. O inventário registrou Git `2.56.0.windows.2`.

## 4. Executar o Portal Acadêmico 360 v0.1

Pré-requisitos: Node.js e npm instalados e disponíveis no terminal. No Windows, os comandos `.cmd` evitam conflitos ocasionais com a política de execução do PowerShell.

```powershell
cd "C:\Users\User\Downloads\portal-academico-360-starter\apps\web"
npm.cmd install
npm.cmd run dev
```

Acesse o endereço mostrado pelo Vite, que na configuração atual costuma ser **http://127.0.0.1:5173/**. Para encerrar, pressione `Ctrl+C` no terminal do servidor.

Verificação de compilação de produção:

```powershell
npm.cmd run build
```

O comando de build **ainda precisa ter seu resultado registrado** como evidência. Para uma prévia da compilação, se ela tiver sido concluída:

```powershell
npm.cmd run preview
```

### Protótipo estático anterior

O projeto legado permanece em `apps/portal-demo/` para comparação. Pode ser aberto diretamente pelo `index.html` ou servido localmente:

```powershell
cd apps/portal-demo
npx.cmd --yes http-server . -p 8080
```

## 5. Funcionalidades mapeadas e limites

| Módulo | Levantamento | Estado da v0.1 |
| --- | --- | --- |
| Início / Dashboard | `HOME-001` | Navegação e conteúdo demonstrativo |
| Meu curso | `CUR-001` | Visualização ilustrativa de curso e matrícula |
| Disciplinas e notas | `DISC-001` | Lista e filtros de dados fictícios |
| Financeiro | `FIN-001` | Serviços e lançamentos fictícios; sem transações reais |
| Secretaria | Pendente | Não implementado |
| Minhas solicitações | Pendente | Não implementado |
| Estudar / AVA | Pendente | Não implementado |

As referências foram levantadas por inspeção de telas em outubro de 2026. Elas **não representam acesso ao backend**, às regras internas, aos dados privados ou ao código das instituições. O produto utiliza visual, conteúdo e implementação próprios.

## 6. GitReverse — ferramenta auxiliar separada

O diretório `tools/gitreverse/` conserva uma cópia de software de terceiros e seus respectivos `LICENSE` e `README.md`. **O GitReverse não é a aplicação Portal Acadêmico 360.** Ele pode apoiar o levantamento de páginas publicamente acessíveis e repositórios, mas não extrai código-fonte privado ou conteúdo protegido por login.

Execução local:

```powershell
cd tools/gitreverse
pnpm.cmd install
# Somente na configuração inicial, caso o arquivo ainda não exista:
Copy-Item .env.example .env.local
# Configure no .env.local apenas os provedores necessários
pnpm.cmd dev
```

Acesse **http://localhost:3000/**. A análise de websites pode exigir uma chave de modelo de IA e `FIRECRAWL_API_KEY` ou `CONTEXT_DEV_API_KEY`; serviços externos podem gerar custos ou restringir acesso. Credenciais devem permanecer locais.

**Correção registrada:** commit `b13b17c`, relativo ao fechamento duplicado de um stream SSE em `app/api/reverse-website/route.ts`. A correção eliminou o erro HTTP 500 observado nessa condição; não constitui certificação completa da ferramenta.

## 7. Inventário, evidências e rastreabilidade — padrão Observatório

O inventário técnico executado em **23/10/2026 às 02:45:51** registrou:

| Indicador | Resultado |
| --- | --- |
| Branch auditada | `main` |
| Commit da v0.1 | `39a66b9` |
| Arquivos versionados no Git | **184** |
| Arquivos analisados pelo inventário | **186** (excluindo pastas de dependências e build) |
| Arquivos versionados do GitReverse | **165** |
| Documentos funcionais levantados | **4** |
| Situação de `apps/web` | Arquivos presentes e interface iniciada localmente |
| Segurança | Nenhum `.env` real rastreado pelo Git no inventário |

No momento da auditoria, o `git status` apontava dois arquivos não rastreados:

- `package-lock.json` na raiz — gerado após comandos npm executados fora da pasta da aplicação; analisar antes de incluir ou excluir.
- `tools/gitreverse/pnpm-workspace.yaml` — configuração local de aprovação de scripts (`esbuild: true`, `sharp: false`, `unrs-resolver: false`); avaliar antes de versionar.

O inventário também marcou Node.js/npm/pnpm como ausentes **na sessão específica de PowerShell utilizada**, embora eles tenham sido instalados e utilizados com sucesso em outras sessões. Isso é compatível com diferenças de `PATH`; não deve ser descrito como ausência geral de instalação.

### Marcos de versionamento

| Commit | Marco |
| --- | --- |
| `143f6bd` | Estrutura inicial com GitReverse |
| `2e67762` | Integração dos históricos Git |
| `6e12b2a` | README técnico inicial |
| `e4aed2a` | Levantamento funcional dos módulos |
| `b13b17c` | Correção do stream SSE no GitReverse |
| `39a66b9` | Publicação do Portal Acadêmico 360 web v0.1 |

O relatório `inventario_projeto.txt` foi gerado localmente. Seu conteúdo não deve ser considerado publicado no GitHub antes de um commit que o inclua explicitamente.

## 8. Segurança, privacidade e atribuição

- **Não oficial:** sem afiliação, endosso ou integração institucional autorizada.
- **Dados:** somente informações fictícias na v0.1; não inserir dados reais de alunos em demos públicas.
- **Credenciais:** nunca versionar `.env.local`, chaves de API, tokens, cookies, códigos MFA ou segredos.
- **Terceiros:** respeitar licença, autoria e termos dos serviços usados pelo GitReverse.
- **Integrações:** exigem permissão e medidas de proteção de dados conformes à LGPD, análise de riscos e revisão de segurança.
- **Operação real:** requer autenticação e autorização robustas, trilhas de auditoria, proteção de dados financeiros, monitoramento e testes de desempenho.

## 9. Roadmap

### Próximo ciclo — consolidação da v0.1

1. Registrar resultados de `npm.cmd run build` e dos testes manuais de navegação e filtros.
2. Corrigir inconsistências visuais e melhorar responsividade/acessibilidade.
3. Revisar documentação e inventário, incluindo arquivos não rastreados antes do commit.
4. Estruturar testes automatizados básicos e CI.

### v0.2 e fases seguintes (planejamento, não implementadas)

1. Evoluir Secretaria e Minhas Solicitações com dados simulados.
2. Construir o módulo AVA demonstrativo.
3. Definir contratos de API, modelagem de dados, backend e autenticação próprios.
4. Implementar persistência, testes de segurança, observabilidade e monitoramento.
5. Avaliar aplicativo móvel após validar os fluxos web.
6. Realizar testes de carga e dimensionamento de infraestrutura conforme requisitos reais.

**Escalabilidade:** atender mais de 500 mil estudantes é uma **hipótese de dimensionamento**, não capacidade comprovada. Exige critérios explícitos de usuários simultâneos, tráfego, disponibilidade e validação por testes de carga.

## 10. Licenças e responsabilidades

A licença e os créditos do GitReverse estão em [`tools/gitreverse/LICENSE`](tools/gitreverse/LICENSE) e [`tools/gitreverse/README.md`](tools/gitreverse/README.md). A inclusão dessa ferramenta no repositório não transfere sua autoria ao Portal Acadêmico 360. Antes de distribuir comercialmente o produto, definir a licença do código autoral e revisar as obrigações de todos os componentes utilizados.

---

**Portal Acadêmico 360 · documentação consolidada da v0.1 · 23/10/2026**
