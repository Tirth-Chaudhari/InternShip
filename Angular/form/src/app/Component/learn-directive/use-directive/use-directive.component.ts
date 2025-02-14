import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-use-directive',
  imports: [HighlightDirective,NgFor],
  templateUrl: './use-directive.component.html',
  styleUrl: './use-directive.component.css'
})
export class UseDirectiveComponent {

  color='red'

  student=['john','ram']

}
