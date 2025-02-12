import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  registerForm: FormGroup=new FormGroup(
    {
       name:new FormControl('',),
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required,Validators.minLength(6)]),
       confirmPassword:new FormControl('',[Validators.required]),
       state:new FormControl('',[Validators.required]),
       gender:new FormControl('',[Validators.required])

    }
  )


  onSubmit()
  {
    console.log(this.registerForm.value);
    console.log(this.registerForm.controls['name']?.value);

    // this.registerForm.setValue(
    //   {
    //     name:'',
    //     email:'',
    //     password:'',
    //     confirmPassword:'',
    //     state:'',
    //     gender:'',

    //   }
    // )
    this.registerForm.reset();

    
    
    
  }

}
