import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './Component/form/form.component';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormComponent,ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form';
}
