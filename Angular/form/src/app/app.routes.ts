import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';
import { LearnSignalComponent } from './Component/learn-signal/learn-signal.component';
import { HomeComponent } from './Component/home/home.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { checkRegisterGuard } from './guard/check-register.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'register',
        pathMatch:'full'
    },
    {
        path:'register',
        component:ReactiveFormsComponent
    },
    {
        
            path:'',
            canActivate:[checkRegisterGuard],
            children:[
                {
                    path:'home',
                    component:HomeComponent

                },
                {
                    path:'signal',
                    component:LearnSignalComponent
                },
               
            ]
        
    }

];
