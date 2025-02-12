import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-learn-signal',
  imports: [],
  templateUrl: './learn-signal.component.html',
  styleUrl: './learn-signal.component.css'
})
export class LearnSignalComponent  {

 count=signal(0);
 double=computed(()=>this.count()*2);

 countEffect=effect(()=>
{
      console.log('count update'+this.count());
      
})
dblCountEffect=effect(()=>
{
  console.log('double count update'+this.double());
  
})

GetCount()
{
  console.log(this.count());
  console.log(this.double());
  
  
}

Increment()
{
  this.count.update((prev)=>prev+1);
}


 
 


}
