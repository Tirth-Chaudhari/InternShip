import { Component } from '@angular/core';
import { NoteBookService,NoteBook } from '../../Service/Notebook/note-book.service';
import { DatePipe, NgClass, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-all-task',
  imports: [NgFor,DatePipe,NgClass],
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css'
})
export class AllTaskComponent 
{

    constructor(public NoteBookService:NoteBookService)
    {
         console.log(this.NoteBookService.AllTask);
         
    }
    AddTask()
    {
        this.NoteBookService.Add.next(true);
    }
    updateTask(task: NoteBook) {
    
      
    }
  
    deleteTask(task: NoteBook) {
      console.log('Delete task:', task);
    }
    toggleImportant(task: NoteBook) {
      task.important = !task.important;
      
    }
  
    toggleCompleted(task: NoteBook) {
      task.completed = !task.completed;
      
    }
  
   
}
