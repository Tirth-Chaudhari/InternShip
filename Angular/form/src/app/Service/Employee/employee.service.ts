import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee[]=[];
  subject:Subject<void>=new Subject();
  empId=1;
  constructor() { }
}

export interface Employee
{
    name:string,
    email:string,
    password:string,
    confirmPassword:string,
    state:string,
    gender:string,
    id:number

}
