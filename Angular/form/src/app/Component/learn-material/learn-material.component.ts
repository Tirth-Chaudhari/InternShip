import { Component, ViewChild } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LearnDialogComponent } from '../learn-dialog/learn-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Employee, EmployeeService } from '../../Service/Employee/employee.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-learn-material',
  imports: [MatIcon,MatTableModule, MatSortModule, MatPaginatorModule,MatSlideToggleModule,MatDialogModule,MatCardModule, MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule,LearnDialogComponent],
  templateUrl: './learn-material.component.html',
  styleUrl: './learn-material.component.css'
})
export class LearnMaterialComponent 
{
  ngOnInit()
  {
      this.employeeService.subject.subscribe(()=>
      {
        this.dataSource = new MatTableDataSource(this.employeeService.employee);
      })
  }
  displayedColumns:string[]=[
    'Name',
    'Email',
    'Gender',
    'State',
    'Action'
  ]
  dataSource: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog,private employeeService:EmployeeService)
  {
    this.dataSource = new MatTableDataSource(this.employeeService.employee);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
   OpenDialog()
   {
      this.dialog.open(LearnDialogComponent);
   }
   UpdateEmployee(employee:any)
   {
       this.dialog.open(LearnDialogComponent,{
        data:employee
       })   
   }
   deleteEmployee(id:number)
   {
      this.employeeService.employee=this.employeeService.employee.filter((emp)=>
      {
          if(emp.id!=id)
          {
              return true;
          }
          return false;
          
      })
      this.employeeService.subject.next();
   }
   
}
