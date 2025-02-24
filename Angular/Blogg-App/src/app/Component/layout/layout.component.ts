import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../Services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  search:string=''
  selection:string='All';
  blogService=inject(BlogService);

  allStr:string='What are you looking for?' //for all placeholder
  trendStr:string='You want to see trend ? enter country name' //for trending  placeholder
  loadData:boolean=false;
  router=inject(Router);
  path=this.router.url;
  name:string='';

  ngOnInit()
  {
      this.name=JSON.parse(localStorage.getItem('token') || '{}').name;
  }

  constructor()
  {
    this.blogService.onload.subscribe((load)=> {
        this.loadData=!load;
    })
  }

  redirectToSignup()
  {
    console.log('signup');
    
    this.router.navigateByUrl('signup')
  }
  LogOut()
  {
      localStorage.removeItem('token');
      this.router.navigateByUrl('signup')
  }


  clearInput()
  {
    this.search='';
  }

  onSearch()
  {
        this.search=this.search.trim();
        if(this.search!='')
        {
              
                  this.blogService.onSearch(this.search);
           
        }

    }





}
