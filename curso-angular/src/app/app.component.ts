import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "Fernanda Alcântara Alves";
  userInfo = {
    age: 16,
    escola: "2º Ano",
    nasc: "21/03/2006"
  }
  userCar = "BMW Z4";
  userCarInfo = {
    year: 2018,
    marca: "BMW"
  }

  userTitulo = {
    directives: "Aula de Diretivas",
    conditional: "Aula de Comandos de Decisão"
  }

  title = 'curso-angular';
}
