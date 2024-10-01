import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const ruter = inject(Router)
  const url = ruter.createUrlTree(['/login']);
  if(auth.checktoken()){
    return true;
  }else{
    return url;
  }
};
