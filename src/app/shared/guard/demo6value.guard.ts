import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const demo6valueGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let param = route.params['parametre']
  console.log(param);

  if(param < 50)
    return true;

  router.navigate(['./404'])
  return false;
};
