import { Component, HostListener, inject } from '@angular/core';
import { BlogService, NewsModel } from '../../Services/blog.service';
import { NgClass, NgFor, NgOptimizedImage } from '@angular/common';
import { distinctUntilChanged, switchMap, toArray } from 'rxjs';
import { Router } from '@angular/router';

@Component({
       selector: 'app-blog-post',
       imports: [NgFor, NgOptimizedImage, NgClass],
       templateUrl: './blog-post.component.html',
       styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
       AllData: NewsModel[] = [];   //all Data
       SearchData: NewsModel[]=[]
       Trending: NewsModel[]=[]; // Trending news

       categories = ['Business', 'Entertainment', 'General', 'Science', 'Sports', 'Technology']
       selectedCategory: string = 'Business'

       loader:boolean=false;
       loader_trend:boolean=false;
       page:number=1;
       router=inject(Router)

       constructor(private blogService: BlogService) {

              
              // Search news category
              this.blogService.searchTerm.pipe(
                     distinctUntilChanged(),
                     switchMap(()=> this.blogService.getAllBlogs())
              ).subscribe((results)=>
              {
                     this.AllData=results.articles;
                     this.blogService.onload.next(false);
              })

              this.blogService.searchCountry.pipe(
                     distinctUntilChanged(),
                     switchMap((cat)=> this.blogService.getTrendingBlogs(cat))
              ).
              subscribe((data)=>
              {
                     this.Trending=data.articles;
                     this.blogService.onload_trend.next(false);

              })

              this.blogService.onload.subscribe((load)=> //loader for all news
              {
                     this.loader=load;
              })
              this.blogService.onload_trend.subscribe((load)=>  //loader for trending news
              {
                     this.loader_trend=load;
              })

       }
    

       ngOnInit()
       {
              //get All blogs from here
              this.loader=true;
              this.blogService.getAllBlogs().subscribe((data)=> 
              {
                     this.AllData=data.articles;
                     this.loader=false;
              })
              this.blogService.onCountrySearch(this.selectedCategory);


       }
       // for loading more data 
       @HostListener('window:scroll',[])
       onWindowScroll()
       {
                     if(window.scrollY+window.innerHeight>=document.body.offsetHeight+120)
                     {
                            if(this.loader==false){
                                   this.loader=true;
                                          this.blogService.loadMoreAllData().subscribe((data)=>
                                          {
                                                 this.AllData=[...this.AllData,...data.articles]
                                                 this.loader=false;
                                          })
                                   }
                            
                    
                            

                     }
       }

       setActiveCategory(category: string) 
       {
              this.selectedCategory = category;
              this.blogService.onCountrySearch(category);
       }

       redirectToBlog(news:NewsModel)
       {
                          
              localStorage.setItem('blogContent', JSON.stringify(news));
              this.router.navigateByUrl('blog')
              
       }



    

       
            


}
