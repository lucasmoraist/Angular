import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  
  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {template: String};
  @Input() name: string = '';
  @Input() info!: {age: number, escola: string, nasc: string};
  @Input() carro: string = '';
  @Input() carInfo!: {year: number, marca: string};

  constructor() { }

  ngOnInit(): void {
  }

}
