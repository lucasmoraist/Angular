import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-components',
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.css']
})
export class FirstComponentsComponent implements OnInit {

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
