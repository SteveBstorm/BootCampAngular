import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, delay, map, of, tap } from 'rxjs';

export const callResolver: ResolveFn<any[] | string> = (route, state) => {
  const service : AuthService = inject(AuthService)

  return service.getAll().pipe(
    delay(2000),
    tap(() => alert("coucou")),
    delay(2000),
    map(x => x.filter(t => t.name.substring(0,1) == route.params["lettre"])),
    tap((x) => console.log(x)),
    delay(2000),
    catchError((error) => of("va mourir :" + error.message)

      )

    )
};
