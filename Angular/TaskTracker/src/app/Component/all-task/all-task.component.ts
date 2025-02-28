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
         
         
    }
    AddTask()
    {
        this.NoteBookService.Add.next(true);
        this.NoteBookService.StoreTask.next();
    }
    updateTask(task: NoteBook) 
    {
        this.NoteBookService.Update.next(task)
        this.NoteBookService.StoreTask.next();

    }
  
    deleteTask(task: NoteBook) {
      this.NoteBookService.Delete.next(task);
      this.NoteBookService.StoreTask.next();
    }
    toggleImportant(task: NoteBook) {
      task.important = !task.important;
      this.NoteBookService.StoreTask.next();
      
    }
  
    toggleCompleted(task: NoteBook) {
      task.completed = !task.completed;
      this.NoteBookService.StoreTask.next();
      
    }

    showTask(task:NoteBook)
    {
        this.NoteBookService.ShowTask.next(task);
    }
    ngOnDestroy()
    {
        localStorage.setItem('key','tirth')
        console.log('destroy');
        
    }
  
   
}
