const alunos = [
  { nome: "Fernando", nota: 8 },
  { nome: "Ana", nota: 5.5 },
  { nome: "Carlos", nota: 6 },
  { nome: "Mariana", nota: 4.2 },
  { nome: "João", nota: 9 }
];

const alunosAprovados = (listaAlunos) => 
  listaAlunos.filter(aluno => aluno.nota >= 6);

const aprovados = alunosAprovados(alunos);

console.log(aprovados);