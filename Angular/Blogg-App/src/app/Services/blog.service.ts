import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apikey=environment.apiKey;
  private apiUrl_all= environment.apiUrl
  private apiUrl_trending=environment.apiTrendUrl

  searchTerm = new Subject<string>(); 
  searchCountry=new Subject<string>();
  onload=new Subject<boolean>();
  onload_trend=new Subject<boolean>();
  

  constructor(private http:HttpClient) 
  {

  }

  onSearch(search:string)
  {
    this.onload.next(true)
    this.searchTerm.next(search);
  }
  onCountrySearch(country:string)
  {
    this.onload_trend.next(true);
    this.searchCountry.next(country);
  }

  getAllBlogs(search:string)
  {
      let query='';
      query=this.apiUrl_all+`q=${search}&from=2025-02-19&to=2025-02-19&sortBy=popularity&apiKey=`+this.apikey;
      return this.http.get<any>(`${query}`)
         
  }
  getTrendingBlogs(country:string,category:string) :Observable<any>
  {
      let query='';
      query=this.apiUrl_trending+'country='+country+'&category='+category+'&page=2'+'&pageSize=5'+'&apiKey='+this.apikey
      return this.http.get<any>(`${query}`)
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

