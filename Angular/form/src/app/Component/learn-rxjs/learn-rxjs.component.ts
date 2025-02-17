import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { from, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-learn-rxjs',
  imports: [NgFor],
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.css'
})
export class LearnRxjsComponent 
{
    data:any[]=[];
    subject:Subject<number> = new Subject<number>();

    mydata=new Observable((observer)=>
    {
      setTimeout(()=>
        {
            observer.next(1);
        },1000)
        // setTimeout(()=>
        //   {
        //     observer.error('something wrong')
        //   },1500)
      setTimeout(()=>
          {
            observer.next(2)
          },2000)
      setTimeout(()=>
            {
            observer.next(3)
            },3000)
            setTimeout(()=>
              {
              observer.complete();
              },3000)
    })


    getAsyncData()
    {
      // this.mydata.subscribe(
      //   {
      //     next:(val)=>{this.data.push(val)},
      //     error:(err)=>{alert(err)},
      //     complete:()=>{alert('completed data')}
      //   }
      //  )


    //opertators

    //of operator

    // of(1,2,3).pipe(map((x:number)=>x*x))
    // .subscribe((v)=>this.data.push(v));
    // } 
    //  1 
    //  4
    //  9

    // of([1,2,3]).pipe(map((x)=>x))
    // .subscribe((v)=>this.data.push(v));
    // }
    // 1,2,3

    // from operator

    // const array = [1, 2, 3];
    // const result = from(array);
    // result.subscribe(x => this.data.push(x));
    //  1
    //  2
    //  3

    //subjects in rxjs
    // subject is apply for all subscribers
      
  // this.subject.subscribe({
  //   next: (v) => console.log(`observerA: ${v}`),
  // });
  // this.subject.subscribe({
  //   next: (v) => console.log(`observerB: ${v}`),
  // });
  //   this.subject.next(1);
  //   this.subject.next(2);
    //  observerA: 1
    //  observerB: 1
    //  observerB: 2
    //  observerA: 2


    }


    
    
      

}
