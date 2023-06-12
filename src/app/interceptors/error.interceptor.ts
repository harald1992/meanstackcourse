import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMsg = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }

        console.error(errorMsg);

        return throwError(() => new Error(errorMsg));
      })
    );
  }
}
