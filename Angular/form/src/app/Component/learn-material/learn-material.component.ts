import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LearnDialogComponent } from '../learn-dialog/learn-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-learn-material',
  imports: [MatSlideToggleModule,MatDialogModule,MatCardModule, MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule,LearnDialogComponent],
  templateUrl: './learn-material.component.html',
  styleUrl: './learn-material.component.css'
})
export class LearnMaterialComponent 
{
  constructor(private dialog:MatDialog)
  {

  }
   OpenDialog()
   {
      this.dialog.open(LearnDialogComponent);
   }
}
