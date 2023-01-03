import { Component } from '@angular/core';
interface Persona {
  nombre: string;
  apellido: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public nombre: string = 'ReNe RIVas';
  public cedula: number = 18938896;
  public persona: Persona = {
    nombre: 'Rene',
    apellido: 'Rivas',
  };

  public mostrarNombre(): void {
    console.log(this.nombre);
    console.log(this.cedula);
    console.log(this.persona);
  }
}
