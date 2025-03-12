import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-learn-material',
  imports: [MatSlideToggleModule,MatCardModule, MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule],
  templateUrl: './learn-material.component.html',
  styleUrl: './learn-material.component.css'
})
export class LearnMaterialComponent 
{
   open:boolean=false;

   OpenForm()
   {
    this.open=!this.open
   }
}
