import { CurrencyPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { CurrencyConvertorPipe } from '../currency-convertor.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usepipe',
  imports: [CurrencyConvertorPipe,FormsModule],
  templateUrl: './usepipe.component.html',
  styleUrl: './usepipe.component.css'
})
export class UsepipeComponent 
{
    your_rate:number=0;
    convert_rate:number=0;
    amount:number=1;

  
}
