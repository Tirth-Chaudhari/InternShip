import { Component } from '@angular/core';
import { NoteBook, NoteBookService } from '../../Service/Notebook/note-book.service';
import { DatePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FilterPipe } from '../../Pipes/Filter/filter.pipe';
@Component({
  selector: 'app-incomplete-task',
  imports: [NgFor,NgIf,DatePipe,NgClass,FilterPipe],
  templateUrl: './incomplete-task.component.html',
  styleUrl: './incomplete-task.component.css'
})
export class IncompleteTaskComponent {

      constructor(public NoteBookService:NoteBookService)
        {
             
             
        }
        // currently here add task not required but for future 
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

}
