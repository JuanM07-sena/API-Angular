import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarJm } from "./components/navbar-jm/navbar-jm";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarJm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('consumoApi');
}
