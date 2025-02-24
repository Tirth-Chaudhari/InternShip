import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogContentComponent } from './Component/blog-content/blog-content.component';
import { HomeComponent } from './Component/home/home.component';
import { SignupComponent } from './Component/signup/signup.component';
import { registerGuard } from './guard/register.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        canActivate:[registerGuard],
        children:[
            {
                path:'blog',
                component:HomeComponent
            }
        ]
    },
    {
        path:'signup',
        component:HomeComponent
    }


];
