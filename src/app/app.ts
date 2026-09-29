import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './shared/menu/menu';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';

@Component({
  imports: [RouterOutlet, Menu, Footer, Home],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = 'Site de Instrumentos Musicais';
}
