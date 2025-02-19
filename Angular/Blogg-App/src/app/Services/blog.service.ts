import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url:String='https://newsapi.org/v2/everything?q=apple&from=2025-02-18&to=2025-02-18&sortBy=popularity&apiKey=9fa182604a50469c919b625d5d84a05c'

  constructor(private http:HttpClient) 
  {

   }

  getBlogs() : Observable<any>
  {
        return this.http.get<any>(`${this.url}`);   
  }
}


export interface NewsModel
{
    source:
    {
      id:String,
      name:String
      },
      author:String,
      title:String,
      description:String,
      url:String,
      urlToImage:String,
      publishedAt:String,
      content:String
}

