import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent implements OnInit {

  canShow: boolean = true;
  nome = "Fernanda";

  @Input() titulo!: {conditional: String};

  constructor() { }

  ngOnInit(): void {
  }

}
