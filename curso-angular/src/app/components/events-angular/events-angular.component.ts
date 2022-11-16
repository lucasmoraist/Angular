import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-angular',
  templateUrl: './events-angular.component.html',
  styleUrls: ['./events-angular.component.css']
})
export class EventsAngularComponent implements OnInit {

  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {events: String};

  //Variavel definida
  num: number = 2;
  //Função que irá multiplicar o número definido
  mult(): void{
    this.num = this.num * 2;
  }
  //Função que irá somar o número definido
  soma(): void{
    this.num = this.num + 2;
  }
  //Função que irá dividir o número definido
  div(): void{
    this.num = this.num / 2;
  }
  //Função que irá subtrair o número difinido
  sub(): void{
    this.num = this.num - 2;
  }

  show: boolean = true;
  //Função que irá alterar o valor de 'show'
  showMessage(): void{
    this.show = !this.show; //!this.show ou toggle, ele faz a inversão dos valores, ou seja, !this.xxxx irá sempre inverter o valor
  }

  constructor() { }

  ngOnInit(): void {
  }
}
