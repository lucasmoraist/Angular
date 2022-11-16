import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  //Saída de dados/evento
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  //Evento atribuido ao botão
  handleClick(){
    this.changeNumber.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
