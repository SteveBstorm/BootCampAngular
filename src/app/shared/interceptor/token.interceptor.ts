import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export class tokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token")
    if(token){
      let clone = req.clone({headers : new HttpHeaders({"authorization" : "bearer "+ token})})
      console.log("coucou")
      return next.handle(clone)
    }
    return next.handle(req);
  }
}

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   let token = localStorage.getItem("token")
//   if(token){
//     let clone = req.clone({headers : new HttpHeaders({"authorization" : "bearer "+ token})})
//     next(clone)
//   }
//   return next(req);
// };
