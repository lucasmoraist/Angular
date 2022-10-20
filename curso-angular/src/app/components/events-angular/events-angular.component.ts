import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-angular',
  templateUrl: './events-angular.component.html',
  styleUrls: ['./events-angular.component.css']
})
export class EventsAngularComponent implements OnInit {

  @Input() titulo!: {events: String};

  constructor() { }

  ngOnInit(): void {
  }

}
