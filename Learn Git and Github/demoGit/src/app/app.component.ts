import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Component/navbar/navbar.component';
<<<<<<< HEAD

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
=======
import { FooterComponent } from './Component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
>>>>>>> feature/footer
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoGit';
}
