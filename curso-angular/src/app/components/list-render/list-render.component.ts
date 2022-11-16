import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  
  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {list: String};

  //Lista que será imprimido no template
  cars = [
    { name: 'Z4', type: 'carro' },
    { name: 'R3', type: 'moto' },
    { name: 'airbus', type: 'avião' },
    { name: 'boeing', type: 'helicóptero' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
