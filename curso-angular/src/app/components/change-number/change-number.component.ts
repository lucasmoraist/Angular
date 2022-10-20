import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {

  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(){
    this.changeNumber.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
