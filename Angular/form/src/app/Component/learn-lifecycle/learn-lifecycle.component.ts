import { Component, OnInit, SimpleChange,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-learn-lifecycle',
  imports: [],
  templateUrl: './learn-lifecycle.component.html',
  styleUrl: './learn-lifecycle.component.css'
})
export class LearnLifecycleComponent  implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
{
  str:String=''
  constructor()
  {
    console.log('constructor');
    
  }
  ngOnInit(): void {
      console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
      console.log('ngAfteContentInit');
      
  }

  ngAfterContentChecked(): void 
  {
      console.log('ngAfterContentChecked');
      
  }
  ngAfterViewInit(): void {
      console.log('ngAfterviewInit');
      
  }
  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
      console.log('Destroy');

    
  }

  ngOnChanges(change:SimpleChange)
  { 
      console.log(this.str);
      
      console.log(change);
      
  }
  

}
