import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  color= 'red';
  font= 30;

  classes = ['green-title', 'small-title'];

  //Compartilhando um dado do componente pai para o componente filho
  @Input() titulo!: {directives: String};

  constructor() { }

  ngOnInit(): void {
  }

}
