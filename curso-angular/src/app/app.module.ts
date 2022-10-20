import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentsComponent } from './components/first-components/first-components.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsAngularComponent } from './components/events-angular/events-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentsComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventsAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
