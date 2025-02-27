import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteBookService 
{
  Add:BehaviorSubject<boolean>=new BehaviorSubject(false)
  Update:BehaviorSubject<boolean>=new BehaviorSubject(false)
  Delete:BehaviorSubject<boolean>=new BehaviorSubject(false)
  AllTask:NoteBook[]=[];
  CompletedTask:NoteBook[]=[];
  ImportantTask:NoteBook[]=[];
  IncompletedTask:NoteBook[]=[];
  
  constructor() { }
}


export interface NoteBook
{
  title:string,
  description:string,
  date:Date,
  completed:boolean,
  important:boolean
}