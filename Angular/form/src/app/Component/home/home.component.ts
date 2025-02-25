import { Component, inject } from '@angular/core';
import { UserService } from '../../Service/User/user.service';

@Component({
  selector: 'app-home',
  imports: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userService=inject(UserService)
  getUsers()
  {
      console.log(this.userService.user);
      
  }

}
