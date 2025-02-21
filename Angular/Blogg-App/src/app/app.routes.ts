import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogContentComponent } from './Component/blog-content/blog-content.component';
import { HomeComponent } from './Component/home/home.component';

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
        path:'blog',
        component:HomeComponent
    }


];
