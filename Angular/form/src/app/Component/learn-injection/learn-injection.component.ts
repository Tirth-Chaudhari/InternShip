import { Component, inject } from '@angular/core';
import { User, UserService } from '../../Service/User/user.service';
// import { UserService } from '../../Service/User/UserService';

@Component({
  selector: 'app-learn-injection',
  imports: [],
  templateUrl: './learn-injection.component.html',
  styleUrl: './learn-injection.component.css'
})
export class LearnInjectionComponent {

  UserService=inject(UserService)
    // constructor(private UserService:UserService)
    // {

    // }

  getUsers()
  {
      this.UserService.getUser().subscribe((result:User[])=>
      {
        console.log(result);
        
      });
     
  }
  

}



