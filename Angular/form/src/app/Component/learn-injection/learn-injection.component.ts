import { Component, inject } from '@angular/core';
import { User, UserService } from '../../Service/User/user.service';
// import { UserService } from '../../Service/User/UserService';

@Component({
  selector: 'app-learn-injection',
  imports: [],
  templateUrl: './learn-injection.component.html',
  styleUrl: './learn-injection.component.css'
})
export class LearnInjectionComponent 
{

  UserService=inject(UserService)
  ngOnInit()
  {
      this.UserService.task.next('task Completed');
  } 
  getUsers()
  {
      this.UserService.getUser().subscribe((result:User[])=>
      {

          this.UserService.user=result;
          let user:User={
            id:'10',
            name:'hello',
             username:'hello'     
          }
          this.UserService.user.push(user)
        
      });
  }
}



