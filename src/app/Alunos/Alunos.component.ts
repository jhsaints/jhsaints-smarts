import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Alunos',
  templateUrl: './Alunos.component.html',
  styleUrls: ['./Alunos.component.css']
})
export class AlunosComponent implements OnInit {

titulo = 'Alunos';

alunoSelecionado: string;

public alunos = [
  { id: 1, nome: 'Maria', sobrenome: 'Santos', telefone: '(84) 94782700' },
  { id: 2, nome: 'Ana', sobrenome: 'Almeida', telefone: '(85) 99855340' },
  { id: 3, nome: 'Josias', sobrenome: 'Alencar', telefone: '(96) 32455521' },
  { id: 4, nome: 'Fillipe', sobrenome: 'Alves', telefone: '(85) 36595852' },
  { id: 5, nome: 'João', sobrenome: 'Calheiros', telefone: '(21) 35462155' },
  { id: 6, nome: 'Eliza', sobrenome: 'Silva', telefone: '(21) 99635654' },
  { id: 7, nome: 'Manoel', sobrenome: 'Danatas', telefone: '(21) 99365899' },

];

alunoSelect(aluno: any){
  this.alunoSelecionado = aluno.nome;
}

voltar() {
  this.alunoSelecionado = "";
}

  constructor() { 
this.alunoSelecionado = "";

  }

  ngOnInit() {
  }

}
