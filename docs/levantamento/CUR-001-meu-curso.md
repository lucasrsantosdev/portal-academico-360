# CUR-001 — Meu Curso

Data: 23/10/2026
Rota de referência: id=pua_meu_curso
Estado: Levantamento parcial

## Elementos observados

- Título Meu Curso
- Descrição de acompanhamento do progresso
- Card com identificação do curso
- Indicador de situação acadêmica
- Controle Ver detalhes
- Seção Acompanhe seu progresso
- Disciplinas e Notas
- Atividades Complementares
- Estudo Dirigido (parcialmente visível)

## Requisitos propostos

CUR-01: Identificação do curso
CUR-02: Situação da matrícula
CUR-03: Detalhes expansíveis
CUR-04: Disciplinas e notas
CUR-05: Atividades complementares
CUR-06: Estudo dirigido
CUR-07: Suporte a múltiplas matrículas

## Modelagem inicial

Entidades previstas:
- Estudante
- Curso
- Matricula
- Disciplina
- Nota
- AtividadeComplementar

Relacionamentos propostos:
Estudante 1:N Matricula
Curso 1:N Matricula
Matricula 1:N DisciplinaMatriculada

## Pendências

- Expandir Ver detalhes
- Investigar Disciplinas e Notas
- Investigar Atividades Complementares
- Conferir os demais itens após rolagem
- Identificar regras de progresso e carga horária

## Segurança

Dados simulados no desenvolvimento.
Implementação original e independente.
Sem utilização de credenciais institucionais.
