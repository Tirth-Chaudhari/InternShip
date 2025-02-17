import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,NgIf,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  toggle:boolean=false
  str:String='';

  constructor()
  {
    console.log('parent Constructor');
    
  }
  ngOnInit(): void {
    console.log('parent OnInit');
    
  }

  ToggleChild()
  {
    this.toggle=!this.toggle
  }

  ngDoCheck()
  {
    console.log('Parent Do Check');
    
  }


}
