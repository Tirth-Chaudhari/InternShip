import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, resource, Signal, signal } from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-learn-signal',
  imports: [FormsModule],
  templateUrl: './learn-signal.component.html',
  styleUrl: './learn-signal.component.css'
})
export class LearnSignalComponent  {
      private url='https://jsonplaceholder.typicode.com/users'
      private posturl='https://jsonplaceholder.typicode.com/posts'

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


      // here using rxResource get user data based on id
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


      // here using toObservable and toSignal get user data based on id
      observableUser=toObservable(this.userId).pipe(
        switchMap(id=> this.http.get<any>(`${this.url}/${id}`)),
      )
      tosignalUser=toSignal(this.observableUser,{initialValue:null})
      
      private eff1=effect(()=>
      {
          console.log('before toSignal');
          
          console.log(this.tosignalUser());
          
          
      })


      usersPost=rxResource({
        request:()=> ({
          obj:{
            userId:this.userId(),
            id:this.userId(),
            title:'checking api',
            body:'no body'
          }
        }),
        loader:({request})=> this.http.post<any>(`${this.posturl}`,request.obj)
      })
      eff2=effect(()=>
      {
        console.log(this.usersPost.value()); 
      })




      onClick()
      {
       
        setTimeout(()=>
        {
          this.userId.set(4);
          
        },4000)
        setTimeout(()=>
        {
          this.userId.set(5);
        },4010)
      }
      onUpdate()
      {
         this.usersPost.value.update((prev)=>({
          ...prev,
          title:'checked api'
        }))
      }
      


}
