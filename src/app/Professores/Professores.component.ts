import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Professores',
  templateUrl: './Professores.component.html',
  styleUrls: ['./Professores.component.css']
})
export class ProfessoresComponent implements OnInit {

titulo = 'Professores';

public professorSelecionado:string;

Professores = [
  { id: 1, nome:'Thais', disciplina: 'Angular'},
  { id: 2,nome:'Rafael', disciplina: 'ASP.NET'},
  {id: 3, nome:'Jessica', disciplina: 'JavaScript'},
  {id: 4, nome:'Erik', disciplina: 'Html'},
  {id: 5, nome:'Joaquim', disciplina: 'CSS'},
];
  


ProfessorSelect(professor: any){
  this.professorSelecionado = professor.nome;}

  voltar(){
  this.professorSelecionado = "";}


  constructor() {
this.professorSelecionado="";

   }

  ngOnInit() {
  }

}
