import { Pipe, PipeTransform } from '@angular/core';
import { NoteBook } from '../../Service/Notebook/note-book.service';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(task:NoteBook[],filterString:string):NoteBook[] {

      const Task:NoteBook[]=[]
      switch(filterString)
      {
        case 'completed':
              task.map((t)=>
              {
                if(t.completed)
                {
                  Task.push(t);
                }
              })
              break
          case 'important':
             task.map((t)=>
              {
                if(t.important)
                {
                  Task.push(t);
                }
              })
              break
           case 'incomplete':
              task.map((t)=>
                {
                  if(!t.completed)
                  {
                    Task.push(t);
                  }
                })
                break
      }
      return Task;

  }

}
