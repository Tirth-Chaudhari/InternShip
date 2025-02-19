import { Component } from '@angular/core';
import { BlogService, NewsModel } from '../../Services/blog.service';
import { NgFor } from '@angular/common';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-blog-post',
  imports: [NgFor],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent 
{
      Data:NewsModel[] =[];   
  
       constructor(private blogService:BlogService)
       {
              this.blogService.getBlogs().pipe(
                  
              ).subscribe((data:any)=>
              {

                  this.Data=data.articles.slice(0,5);
                  console.log(this.Data);
                  
 
                  
              })
       }

      

}
