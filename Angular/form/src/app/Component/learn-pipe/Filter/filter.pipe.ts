import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter',
  // pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[],filterString:string):string[] {
    

    
    
    if(filterString=='')
    {
      return value;
    }
    
    const users:string[]=[]
    
    value.filter((name:string)=>
    {
      if(name==filterString)
      {
        users.push(name)
        
      }
        
    })
    return users
   


  }

}
