import { NgClass, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgClass,NgFor],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  router:Router=inject(Router)
  navigation=[
    {
      path:'all-task',
      label:'All Task',
      link:'',
    },
    {
      path:'completed-task',
      label:'Completed Task',
      link:'',
    
    },
    {
      path:'important-task',
      label:'Important Task',
      link:'',
    },
    {
      path:'incomplete-task',
      label:'Incomplete Task',
      link:'',
    },
  ]

  

  ngOnInit()
  {
    this.router.navigateByUrl('all-task')
    
  }

}
