import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

const HTTP_STATUS_ABORTED = 0;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMsg = '';
    if (error.status === HTTP_STATUS_ABORTED) {
      errorMsg = 'An client-side or network error occurred';
    } else if (error.status === HttpStatusCode.InternalServerError) {
      errorMsg = 'An internal server error occurred';
    } else {
      errorMsg = `Backend returned code ${error.status}`;
    }

    console.error(errorMsg, ', body was: ', error.error);

    // Return an observable with a user-facing error message.
    return throwError(() => {
      return new Error(errorMsg);
      // return error;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(catchError((err) => this.handleError(err)));

    // return next.handle(request).pipe(catchError(this.handleError));
  }
}
