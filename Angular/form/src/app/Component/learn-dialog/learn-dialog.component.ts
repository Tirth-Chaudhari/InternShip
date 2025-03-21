import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../Service/Employee/employee.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-learn-dialog',
  imports: [ReactiveFormsModule,MatRadioModule,MatIconModule,MatDialogModule,MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatCardModule],
  templateUrl: './learn-dialog.component.html',
  styleUrl: './learn-dialog.component.css'
})
export class LearnDialogComponent {
  states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',];
   
      constructor(private employeeService:EmployeeService,@Inject(MAT_DIALOG_DATA) public data:any){}
      registerForm: FormGroup=new FormGroup(
        {
           name:new FormControl('',),
           email:new FormControl('',[Validators.required,Validators.email]),
           password:new FormControl('',[Validators.required,Validators.minLength(6)]),
           confirmPassword:new FormControl('',[Validators.required]),
           state:new FormControl('',[Validators.required]),
           gender:new FormControl('',[Validators.required]),
          
    
        })
      ngOnInit()
      {
          this.registerForm.patchValue(this.data);
      }
      onSubmit()
      {
              this.employeeService.employee.push({
              name:this.registerForm.value.name,
              email:this.registerForm.value.email,
              password:this.registerForm.value.password,
              confirmPassword:this.registerForm.value.confirmPassword,
              state:this.registerForm.value.state,
              gender:this.registerForm.value.gender,
              id:this.employeeService.empId
              });
              this.employeeService.empId++;
              this.employeeService.subject.next();  

          
      }
      UpdateEmployee()
      {
        this.employeeService.employee = this.employeeService.employee.map((emp) => {
          if (emp.id === this.data.id) {
            return {
              ...emp,  // Spread operator to retain other properties
              name: this.registerForm.value.name,
              email: this.registerForm.value.email,
              password: this.registerForm.value.password,
              confirmPassword: this.registerForm.value.confirmPassword,
              state: this.registerForm.value.state,
              gender: this.registerForm.value.gender,
              id: emp.id,
            };
          } else {
            return emp;
          }
        });
        
        
        
        this.employeeService.subject.next();  


      }
}
