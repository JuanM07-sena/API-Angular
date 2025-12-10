import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-jm',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './navbar-jm.html',
  styleUrl: './navbar-jm.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarJm {

}
