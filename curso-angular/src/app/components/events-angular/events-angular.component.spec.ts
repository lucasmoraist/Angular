import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAngularComponent } from './events-angular.component';

describe('EventsAngularComponent', () => {
  let component: EventsAngularComponent;
  let fixture: ComponentFixture<EventsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
