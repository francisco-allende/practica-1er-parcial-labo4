import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusquedaComponent, BienvenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica-primer-parcial';
}
