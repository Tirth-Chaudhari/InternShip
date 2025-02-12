import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const checkRegisterGuard: CanActivateFn = (route, state) => {


  const name=localStorage.getItem('name');
  const router=inject(Router)
  if(name)
  {
    return true;
  }
  else
  {
    router.navigateByUrl('register')
    return false;
  }
  

};
