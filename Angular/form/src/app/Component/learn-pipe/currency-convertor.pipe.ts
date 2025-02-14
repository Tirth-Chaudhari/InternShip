import { Input, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertor'
})
export class CurrencyConvertorPipe implements PipeTransform 
{
  
  
  transform(value:number, ...args: number[]): number {
    
    const your_rate=args[0];
    const convert_rate=args[1];

    if(convert_rate==0)
    {
      return 0;
    }
    return (value/your_rate)*convert_rate;

  }

}
