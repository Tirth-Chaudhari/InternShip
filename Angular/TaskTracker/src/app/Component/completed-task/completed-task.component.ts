import { Component } from '@angular/core';
import { NoteBook, NoteBookService } from '../../Service/Notebook/note-book.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-completed-task',
  imports: [NgFor,NgIf,DatePipe,NgClass],
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.css'
})
export class CompletedTaskComponent {

  constructor(public NoteBookService:NoteBookService)
      {
           console.log(this.NoteBookService.AllTask);
           
      }
      updateTask(task: NoteBook) 
      {
          this.NoteBookService.Update.next(task)
  
      }
    
      deleteTask(task: NoteBook) {
        console.log('Delete task:', task);
        this.NoteBookService.Delete.next(task);
      }
      toggleImportant(task: NoteBook) {
        task.important = !task.important;
        
      }
    
      toggleCompleted(task: NoteBook) {
        task.completed = !task.completed;
        
      }
  
      showTask(task:NoteBook)
      {
          this.NoteBookService.ShowTask.next(task);
      }

}
