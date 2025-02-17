import { Component, ContentChild, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent  {

  @Input() str:String=''
  @ContentChild('contentInit') contentInit:any;
  constructor()
  {
    console.log('child Constructor');
    
  }
  ngOnInit(): void {
      console.log('child OnInit');
      console.log(this.contentInit+' child');
      
      
  }
  ngOnDestroy()
  {
    console.log('child destroyed');
      console.log(this.contentInit+' child');
    

    
  }
  ngOnChanges(changes:SimpleChange)
  {
    console.log(changes);
      console.log(this.contentInit+' child');
    
  }
  ngDoCheck()
  {
    console.log('child Do Check');
      console.log(this.contentInit+' child');
    
    
  }
  ngAfterContentInit()
  {
    console.log('AfterContentInit');
      console.log(this.contentInit+' child');
    
    
  }
  ngAfterContentChecked()
  {
    console.log('ngAfterContentCheck child');
  }
}
