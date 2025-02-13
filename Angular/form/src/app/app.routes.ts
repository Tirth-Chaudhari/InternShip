import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';
import { LearnSignalComponent } from './Component/learn-signal/learn-signal.component';
import { HomeComponent } from './Component/home/home.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { checkRegisterGuard } from './guard/check-register.guard';
import { LearnLifecycleComponent } from './Component/learn-lifecycle/learn-lifecycle.component';
import { LearnInjectionComponent } from './Component/learn-injection/learn-injection.component';

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
            component:LayoutComponent,
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
                {
                    path:'lifecycle',
                    component:LearnLifecycleComponent
                },
                {
                    path:'inject',
                    component:LearnInjectionComponent
                }
               
            ]
        
    }

];
