import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-angular',
  templateUrl: './events-angular.component.html',
  styleUrls: ['./events-angular.component.css']
})
export class EventsAngularComponent implements OnInit {

  @Input() titulo!: {events: String};

  num: number = 2;
  mult(): void{
    this.num = this.num * 2;
  }
  soma(): void{
    this.num = this.num + 2;
  }
  div(): void{
    this.num = this.num / 2;
  }
  sub(): void{
    this.num = this.num - 2;
  }

  show: boolean = true;
  showMessage(): void{
    this.show = !this.show; //!this.show ou toggle, ele faz a inversão dos valores, ou seja, !this.xxxx irá sempre inverter o valor
  }

  constructor() { }

  ngOnInit(): void {
  }
}
