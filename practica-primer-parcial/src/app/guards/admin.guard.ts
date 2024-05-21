import { inject } from '@angular/core'; 
import { AuthService } from '../services/auth.service';
import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if(auth.getUser()) {
    console.log("puede pasar");
    return true
  }

  console.log("no puede pasar");
  return  false;
};
