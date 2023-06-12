import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

import { ErrorUtilService } from '../services/general-services/error-util.service';

export const routerGuard: CanActivateFn = (route, state) => {
  const service = inject(ErrorUtilService); // inject services into the routerguard function
  const router = inject(Router);

  return true;

  // return router.navigate(['/login'])
};
