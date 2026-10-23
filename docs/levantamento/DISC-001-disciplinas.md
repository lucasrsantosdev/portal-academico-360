# DISC-001 — Disciplinas e Notas

Data: 23/10/2026
Referência: Portal Digital do Aluno — Anhanguera
Rota observada: id=pua_disciplinas
Estado: Levantamento parcial

## Componentes identificados

DISC-01: Navegação de retorno
DISC-02: Aba Todas
DISC-03: Filtro por situação
DISC-04: Filtro por semestre
DISC-05: Contagem de disciplinas
DISC-06: Listagem de disciplinas
DISC-07: Nome da disciplina
DISC-08: Situação acadêmica
DISC-09: Semestre e ano
DISC-10: Carga horária
DISC-11: Média final

## Modelo de dados proposto

Disciplina:
- id
- nome
- carga_horaria

DisciplinaMatriculada:
- id
- matricula_id
- disciplina_id
- semestre
- ano
- situacao
- media_final

## Funcionalidades futuras

- Filtrar disciplinas por semestre
- Filtrar por situação
- Consultar desempenho
- Consultar carga horária
- Visualizar histórico acadêmico
- Navegação responsiva para aplicativo

## Pendências

- Investigar todas as situações acadêmicas
- Identificar regra de aprovação
- Verificar detalhes das disciplinas
- Investigar histórico e avaliações

## Segurança

Dados fictícios durante o desenvolvimento.
Implementação independente.
Sem acesso ao backend institucional.
