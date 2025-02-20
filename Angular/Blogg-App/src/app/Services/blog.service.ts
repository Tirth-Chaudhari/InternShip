import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) 
  {

   }

  getBlogs() : Observable<any>
  {
        return this.http.get<any>(`${this.apiUrl}`);   
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

