import { Routes } from '@angular/router';
import { LayoutComponent } from './Component/layout/layout.component';
import { CompletedTaskComponent } from './Component/completed-task/completed-task.component';
import { IncompleteTaskComponent } from './Component/incomplete-task/incomplete-task.component';
import { ImportantTaskComponent } from './Component/important-task/important-task.component';

export const routes: Routes = [

    {
        path: '',
        component:LayoutComponent,
        children:[
            {
                path:'all-task',
                loadComponent:()=>  import('./Component/all-task/all-task.component')
                                    .then(load=>load.AllTaskComponent)
            },
            {
                path:'completed-task',
                loadComponent:()=>  import('./Component/completed-task/completed-task.component')
                                    .then(load=>load.CompletedTaskComponent),
            },
            {
                path:'important-task',
                loadComponent:()=>  import('./Component/important-task/important-task.component')
                                    .then(load=>load.ImportantTaskComponent),
            },
            {
                path:'incomplete-task',
                loadComponent:()=>  import('./Component/incomplete-task/incomplete-task.component')
                                    .then(load=>load.IncompleteTaskComponent),
            },
       
        ]
    }





];
