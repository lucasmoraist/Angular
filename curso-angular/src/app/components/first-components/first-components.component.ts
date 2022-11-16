import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css']
})
export class FirstComponentsComponent implements OnInit {

  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {component: String};

  //Informando dados que serão imprimidos no template
  name: string = 'Lucas';
  age: number = 18;
  job = "Programador"; //Estes dados irão vir do banco de dados
  hobbies = ["Jogar", "Sair", "Viajar"]
  car = {
    name: "BMW X1",
    year: 2020
  }

  constructor() { }

  ngOnInit(): void {
  }

}
