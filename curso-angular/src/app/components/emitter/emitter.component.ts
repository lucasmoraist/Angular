import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  myNumber: number = 0;

  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {emitting: String};

  constructor() { }

  ngOnInit(): void {
  }
  //Evento que irá gerar um número aleatório entre 0 e 9
  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10);
  }

}
