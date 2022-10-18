import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  @Input() titulo!: {directives: String};

  constructor() { }

  ngOnInit(): void {
  }

}
