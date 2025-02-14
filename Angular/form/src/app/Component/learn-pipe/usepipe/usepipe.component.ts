import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../currency-convertor.pipe';

@Component({
  selector: 'app-usepipe',
  imports: [CurrencyConvertorPipe],
  templateUrl: './usepipe.component.html',
  styleUrl: './usepipe.component.css'
})
export class UsepipeComponent {

    amount:number=10;
}
