import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoteBook, NoteBookService } from './Service/Notebook/note-book.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TaskTracker';
  OpenAddTask:boolean=false;
  addTaskForm:FormGroup=new FormGroup(
    {
      title:new FormControl(''),
      description:new FormControl(''),
      date:new FormControl(''),
      completed:new FormControl(false),
      important:new FormControl(false)
    }
  )
  constructor(private NoteBookService:NoteBookService)
  {
      this.NoteBookService.Add.subscribe((open:boolean)=>
      {
          this.OpenAddTask=open;
          
      })
  }

  CloseAddTask()
  {
    this.NoteBookService.Add.next(false);
    this.addTaskForm.reset({
      completed:false,
      important:false
    });
  }
  
  AddTask()
  {
     const obj:NoteBook={
      title:this.addTaskForm.get('title')?.value,
      description:this.addTaskForm.get('description')?.value,
      date:this.addTaskForm.get('date')?.value,
      completed:this.addTaskForm.get('completed')?.value,
      important:this.addTaskForm.get('important')?.value
     }
     this.NoteBookService.AllTask.push(obj);
     console.log(this.NoteBookService.AllTask);
     
     this.CloseAddTask();

  }



}
