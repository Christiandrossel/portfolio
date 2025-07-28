import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = await firstValueFrom(auth.user$);
  if (user && auth.isAllowed(user.email)) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
