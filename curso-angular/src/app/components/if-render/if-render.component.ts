import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  //Condição que irá apresentar oque estiver escrito enquanto for true
  canShow: boolean = true;
  //Nome definido para condição
  nome = "Fernanda";

  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {conditional: String};

  constructor() { }

  ngOnInit(): void {
  }

}
