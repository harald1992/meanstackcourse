import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ErrorUtilService } from '../services/general-services/error-util.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private errorUtilService: ErrorUtilService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url === '') {
      // do stuff
    }

    const modifiedRequest = request.clone({
      headers: request.headers.append('Authorization', 'Bearer ' + 'token'),
    });

    return next.handle(request).pipe(
      // interact with the response of the httprequest
      tap((event) => {
        // console.log('tap ', event);
      })
    );
  }
}
