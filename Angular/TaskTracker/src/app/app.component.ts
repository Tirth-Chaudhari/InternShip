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
  OpenUpdateTask:boolean=false;
  OpenDeleteTask:boolean=false;
  ShowTask:boolean=false;
  task:NoteBook={
    title:'',
    description:'',
    date:new Date(),
    completed:false,
    important:false
  }

  updateTask:NoteBook={
    title:'',
    description:'',
    date:new Date(),
    completed:false,
    important:false

  }
  addTaskForm:FormGroup=new FormGroup(
    {
      title:new FormControl(''),
      description:new FormControl(''),
      date:new FormControl(''),
      completed:new FormControl(false),
      important:new FormControl(false)
    }
  )
  updateTaskForm:FormGroup=new FormGroup(
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
      this.NoteBookService.Update.subscribe((Task:NoteBook)=>
      {
            this.OpenUpdateTask=true;
            this.updateTask=Task;
            this.updateTaskForm.reset({
              title:Task.title,
              description:Task.description,
              date:Task.date,
              completed:Task.completed,
               important:Task.important
            })
      
      })
      this.NoteBookService.Delete.subscribe((Task:NoteBook)=>
        {
            let index=this.NoteBookService.AllTask.indexOf(Task);
            // this.NoteBookService.AllTask.splice(index,1);
          // also possible using filter    here use filter for pure pipes concept so change detects          
           this.NoteBookService.AllTask= this.NoteBookService.AllTask.filter((task,ind)=>
            {
                  
                  return index!==ind;
            })
            
            
        })
        this.NoteBookService.ShowTask.subscribe((Task:NoteBook)=>
        {
              this.ShowTask=true;
              this.task=Task;
        })
        this.NoteBookService.StoreTask.subscribe(()=>
        {
              localStorage.setItem('AllTask',JSON.stringify(this.NoteBookService.AllTask))
        })
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
     
     this.NoteBookService.StoreTask.next();
     
     this.CloseAddTask();
  }
  CloseAddTask()
  {
    this.NoteBookService.Add.next(false);
    this.addTaskForm.reset({
      completed:false,
      important:false
    });
  }

  UpdateTask()
  {
      this.updateTask.title=this.updateTaskForm.get('title')?.value,
      this.updateTask.description=this.updateTaskForm.get('description')?.value,
      this.updateTask.date=this.updateTaskForm.get('date')?.value,
      this.updateTask.completed=this.updateTaskForm.get('completed')?.value,
      this.updateTask.important=this.updateTaskForm.get('important')?.value
      this.CloseUpdateTask()
      this.NoteBookService.StoreTask.next();
  }
  CloseUpdateTask()
  {
      this.OpenUpdateTask=false
      this.updateTaskForm.reset({
        completed:false,
        important:false
       })
  }

  CloseShowTask()
  {
    this.ShowTask=false;
  }

  




}
