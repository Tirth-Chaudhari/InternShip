import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../Services/blog.service';

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


  clearInput()
  {
    this.search='';
  }

  onSearch()
  {
        this.search=this.search.trim();

        if(this.search!='')
        {
              if(this.selection=='All')
              {
                  this.blogService.onSearch(this.search);
              }
              else
              {
                  this.blogService.onCountrySearch(this.search)
              }
        }

        
  }



}
