import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from './Component/reactive-forms/reactive-forms.component';
import { LearnSignalComponent } from './Component/learn-signal/learn-signal.component';
import { HomeComponent } from './Component/home/home.component';
import { LayoutComponent } from './Component/layout/layout.component';
import { checkRegisterGuard } from './guard/check-register.guard';
import { LearnInjectionComponent } from './Component/learn-injection/learn-injection.component';
import { UseDirectiveComponent } from './Component/learn-directive/use-directive/use-directive.component';
import { UsepipeComponent } from './Component/learn-pipe/usepipe/usepipe.component';
import { ParentComponent } from './Component/learn-lifecycle/parent/parent.component';
import { LearnRxjsComponent } from './Component/learn-rxjs/learn-rxjs.component';
import { LearnImageComponent } from './Component/learn-image/learn-image.component';
import { LearnTailwindComponent } from './Component/learn-tailwind/learn-tailwind.component';

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
                    component:ParentComponent
                },
                {
                    path:'inject',
                    component:LearnInjectionComponent
                },
                {
                    path:'directive',
                    component:UseDirectiveComponent
                },
                {
                    path:'pipe',
                    component:UsepipeComponent
                },
                {
                    path:'rxjs',
                    component:LearnRxjsComponent

                },
                {
                    path:'learn-image',
                    component:LearnImageComponent
                },
                {
                    path:'learn-tailwind',
                    component:LearnTailwindComponent
                }
               
            ]
        
    }

];
