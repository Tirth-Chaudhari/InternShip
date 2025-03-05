import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, resource, Signal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-learn-signal',
  imports: [FormsModule],
  templateUrl: './learn-signal.component.html',
  styleUrl: './learn-signal.component.css'
})
export class LearnSignalComponent  {
      private url='https://jsonplaceholder.typicode.com/users'

      uid:number=1;
      userId=signal<number>(1)
      // user id signal on change detection user data get
      
      constructor(private http:HttpClient)
      {
        
      }

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

      users=rxResource({
          request:()=> ({
            id:this.userId()
          }),
          loader:({request})=> this.http.get<any>(`${this.url}/${request.id}`)
        })

      private eff=effect(()=>
      {
          console.log(this.users.status());
          console.log(this.users.error());
          console.log(this.users.value());
          
      })

      onClick()
      {
        this.userId.set(this.uid);
      }
      


}
