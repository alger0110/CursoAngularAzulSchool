import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Noticias';
  suma = 5 + 1;
  nombre = "Emanuel";
  apellido = "Garcia";
  arreglo = ["Nombre", "Apelido", "Edad"]
}
