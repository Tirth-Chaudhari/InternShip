import { Component, inject, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutComponent } from '../layout/layout.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { Router } from '@angular/router';
import { BlogContentComponent } from '../blog-content/blog-content.component';
@Component({
  selector: 'app-home',
  imports: [FormsModule,LayoutComponent,BlogPostComponent,BlogContentComponent,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  router=inject(Router);
  path=this.router.url;

  
    ngOnInit()
    {
      if(this.path=='/signup')
      {
        document.body.style.background='gray'
      }
      else{
        document.body.style.background='white'
       
      }
    }




  registerForm: FormGroup=new FormGroup(
    {
       name:new FormControl('',),
       email:new FormControl('',[Validators.required,Validators.email]),
       password:new FormControl('',[Validators.required,Validators.minLength(6)]),
       confirmPassword:new FormControl('',[Validators.required]),
    }
  )


  onSubmit()
  { 
      
      let obj=this.registerForm;
      
     
      const token={
        name:obj.get('name')?.value,
        email:obj.get('email')?.value,
        password:obj.get('password')?.value
      }
      
  
      localStorage.setItem('token',JSON.stringify(token));
      this.router.navigateByUrl('/home');
      this.registerForm.reset();
    
    
  }


 





}
