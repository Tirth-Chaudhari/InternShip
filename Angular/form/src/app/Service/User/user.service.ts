import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl='https://jsonplaceholder.typicode.com/users'
  private http=inject(HttpClient)
  user:User[]=[]

  constructor() { } 

  getUser()
  {
    return this.http.get<User[]>(this.userUrl);
  }
}

export interface User{
  id:string,
  name:string,
  username:string
}

