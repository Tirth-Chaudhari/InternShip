import { Routes } from '@angular/router';
import { SignupComponent } from './Component/signup/signup.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'signup',
        pathMatch:'full'
    },
    {
        path:'signup',
        component: SignupComponent
    },
    {
        path:'home',
        loadComponent:()=> import('./Component/home/home.component')  // lazy loading
                            .then(m=>m.HomeComponent),
       
        children:
        [
            {
                path:'about',
                loadComponent:()=> import('./Component/about/about.component')
                                   .then(m=>m.AboutComponent)
            }
            
        ]
                        

    
    
    },
    


];
