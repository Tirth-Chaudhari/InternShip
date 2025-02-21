import { Component } from '@angular/core';
import { BlogService, NewsModel } from '../../Services/blog.service';
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { distinctUntilChanged, switchMap, toArray } from 'rxjs';

@Component({
       selector: 'app-blog-post',
       imports: [NgFor, NgOptimizedImage, NgClass],
       templateUrl: './blog-post.component.html',
       styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
       Data: NewsModel[] = [];   //all Data
       Trending: NewsModel[]=[]; // Trending news

       categories = ['Business', 'Entertainment', 'General', 'Science', 'Sports', 'Technology']
       selectedCategory: string = 'Business'

       loader:boolean=false;
       loader_trend:boolean=false;

       constructor(private blogService: BlogService) {

              // for All blog service searchTerm here

              this.blogService.searchTerm.pipe(
                    
                     distinctUntilChanged(),
                     switchMap((term)=> this.blogService.getAllBlogs(term))
              ).subscribe((results)=>
              {
                     this.Data=results.articles.slice(0,10)
                     this.blogService.onload.next(false);
              })

              // for searchCountry  Trending News here

              this.blogService.searchCountry.pipe(
                     distinctUntilChanged(),
                     switchMap((country)=> this.blogService.getTrendingBlogs(country,this.selectedCategory))
              ).subscribe((results)=>
              {
                     this.Trending=results.articles
                     this.blogService.onload_trend.next(false);
                     
              })

              this.blogService.onload.subscribe((load)=>
              {
                     this.loader=load;
              })
              this.blogService.onload_trend.subscribe((load)=>
              {
                     this.loader_trend=load;
              })

       }
 
       ngOnInit()
       {
              this.blogService.onSearch('apple');
              this.blogService.onCountrySearch('us');

       }

       setActiveCategory(category: string) {
              this.selectedCategory = category;
       }



}
