import { Component, inject } from '@angular/core';
import { NewsModel } from '../../Services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-content',
  imports: [],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContentComponent {

  news: NewsModel = {
    author: '',
    content: '',
    description: '',
    publishedAt: '',
    source: { id: '', name: '' },
    title: '',
    url: '',
    urlToImage: '',
  };
  router=inject(Router)
 constructor()
 {
    this.news=JSON.parse(localStorage.getItem('blogContent') || "")
    
 }

 redirectToBlogPage()
 {
    // this.router.navigateByUrl('home')
    window.history.back();
 }

  

}
