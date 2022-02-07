import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {


@Input() titulo: string;    // Este input está relacionado ao titulo quando se clica pra exibir a lista suspensa no vavbar

  constructor() {

    this.titulo = "";    /// Foi criado este codigo para rodar o input logo acima.
   }
 
  ngOnInit() {
  }

}
