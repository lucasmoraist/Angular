import { Component, Input, OnInit } from '@angular/core';

import { Car } from 'src/app/Car';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  
  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {list: String};

  //Lista que será imprimido no template
  cars: Car[] = [
    { name: 'Z4', type: 'carro', year: 2014 },
    { name: 'R3', type: 'moto', year:  2012},
    { name: 'airbus', type: 'avião', year: 2019 },
    { name: 'boeing', type: 'helicóptero', year: 2015 },
  ];

  carDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showYear(car: Car): void{
    this.carDetails = `O carro ${car.name} é do ano ${car.year}`
  }

}
