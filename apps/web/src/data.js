// Dados totalmente fictícios. Não representam cadastros, notas ou cobranças de instituições.
export const student = {name:'Marina', fullName:'Marina Oliveira', enrollment:'DEMO-2026-001', program:'Análise e Desenvolvimento de Sistemas', period:'4º semestre', status:'Ativa', mode:'EAD', progress:63};
export const courses = [
  {id:1,name:'Desenvolvimento de Aplicações Web',term:'2026.2',hours:80,grade:9.2,status:'Aprovado'},
  {id:2,name:'Banco de Dados II',term:'2026.2',hours:60,grade:8.7,status:'Aprovado'},
  {id:3,name:'Engenharia de Software',term:'2026.2',hours:80,grade:null,status:'Cursando'},
  {id:4,name:'Estruturas de Dados',term:'2026.1',hours:80,grade:8.4,status:'Aprovado'},
  {id:5,name:'Matemática Aplicada',term:'2026.1',hours:60,grade:5.1,status:'Reprovado'},
  {id:6,name:'UX e Acessibilidade',term:'2025.2',hours:60,grade:9.5,status:'Aprovado'},
];
export const invoices = [
 {id:'MEN-101',name:'Mensalidade setembro',due:'2026-09-10',amount:349.90,status:'Pago'},
 {id:'MEN-102',name:'Mensalidade outubro',due:'2026-10-10',amount:349.90,status:'Pago'},
 {id:'MEN-103',name:'Mensalidade novembro',due:'2026-11-10',amount:349.90,status:'Em aberto'},
];
export const reminders=[{title:'Atualizar documentação',detail:'Confira os documentos solicitados pela secretaria',tag:'Documentos'},{title:'Atividade de Engenharia de Software',detail:'Prazo simulado: 29/10/2026',tag:'Acadêmico'},{title:'Mensalidade de novembro',detail:'Vencimento simulado: 10/11/2026',tag:'Financeiro'}];
