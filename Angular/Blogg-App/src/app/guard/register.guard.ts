import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const registerGuard: CanActivateFn = (route, state) => {
 
    const router=inject(Router);
    
    const name=JSON.parse(localStorage.getItem('token') || '{}').name;
    
    if(!name)
    {
      router.navigateByUrl('signup');
      return false;
    }
    return true;
    
   
};
