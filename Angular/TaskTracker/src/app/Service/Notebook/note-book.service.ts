import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteBookService 
{
  Add:BehaviorSubject<boolean>=new BehaviorSubject(false)
  Update:Subject<NoteBook>=new Subject()
  Delete:Subject<NoteBook>=new Subject()
  ShowTask:Subject<NoteBook> =new Subject()
  AllTask:NoteBook[]=[];
  
  
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