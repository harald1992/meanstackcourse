import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url === '') {
      // do stuff
    }

    // const modRequest = request.clone({
    //   // headers: request.headers.append('credentials', 'include'),
    //   withCredentials: true,
    // });

    const modifiedRequest = request.clone({
      headers: request.headers
        .append('Authorization', 'Bearer ' + 'token')
        .append('credentials', 'include'),
      withCredentials: true,
    });

    return next.handle(request).pipe(
      // interact with the response of the httprequest
      tap((event) => {
        // console.log('tap ', event);
      })
    );
  }
}
