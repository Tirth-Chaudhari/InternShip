import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AsyncSubject, BehaviorSubject, debounce, debounceTime, distinctUntilChanged, from, map, Observable, of, ReplaySubject, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-learn-rxjs',
  imports: [NgFor,FormsModule],
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.css'
})
export class LearnRxjsComponent 
{
    data:any[]=[];
    key:String='';

    subject:Subject<String>=new Subject<String>();

    constructor()
    {
        this.subject.pipe(
            debounceTime(2000),
            distinctUntilChanged(),
            // switchMap((value)=>this.getdata()),

            
        ).subscribe((value)=>
        {
          console.log(value);
          
        })

    }
    // getdata()
    // {
    //     console.log('hello');
    //     return of(1,2,3);
    // }
    // subject:Subject<number> = new Subject<number>(); 
    //  subject = new BehaviorSubject(0); 
    // subject=new ReplaySubject(2); // 2 is here buffer value
    // subject=new AsyncSubject() 

    onSearch()
    {
      this.subject.next(this.key);
      
    }

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



    //Behavioural Subject

    // this.subject.subscribe({
    //   next:(value)=> console.log(value)
    // })
    // this.subject.next(1);
    // this.subject.next(2);
    // this.subject.subscribe({
    //   next:(value)=> console.log(value)
    // })
    // this.subject.next(3);



    // Replay Subject

    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    // this.subject.next(1);
    // this.subject.next(2);
    // this.subject.next(3);
    // this.subject.next(4);
    
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });
    // this.subject.next(5);



    //AsyncSubject:
    // async subject takes only last data when it completet

    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`),
    // });
    // this.subject.next(1);
    // this.subject.next(2);
    // this.subject.next(3);
    // this.subject.next(4);
    
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerB: ${v}`),
    // });
    // this.subject.next(5);
    // this.subject.complete();

    }



    
    
      

}
