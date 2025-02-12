import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule,NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  email:string=''
  phone:string=''
  password:string=''
  confirm:string=''

  Submit()
  {
    alert(this.email+''+this.phone+' Register Success')
    
  }

  register(registerForm:NgForm)
  {
      if(this.password!=this.confirm)
      {
        alert('confirm password different')
      }
      else if(registerForm.valid)
      { 
        alert(this.email+'register successfuly')
        
        
      }
      else{
        alert('Enter Valid Entry')
      }
  }


}
