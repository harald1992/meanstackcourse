import { TestBed } from '@angular/core/testing';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ErrorInterceptor } from './error.interceptor';

describe('ErrorInterceptor', () => {
  let client: HttpClient;
  let httpController: HttpTestingController;
  let interceptor: ErrorInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ErrorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    });

    client = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    interceptor = TestBed.inject(ErrorInterceptor);
    spyOn(console, 'error');
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should log errors via handleError', () => {
    expect(interceptor).toBeTruthy();

    const errorResponse = new HttpErrorResponse({
      error: 'oops',
      status: HttpStatusCode.InternalServerError,
      statusText: 'Internal server error',
    });

    interceptor.handleError(errorResponse);
    expect(console.error).toHaveBeenCalledWith(
      'An internal server error occurred',
      ', body was: ',
      errorResponse.error
    );
  });

  it('should call handleError with the correct errorObject on code 400', (done: DoneFn) => {
    const expectedErrorResponse = new HttpErrorResponse({
      url: '/target',
      status: HttpStatusCode.BadRequest,
      statusText: 'Bad Request',
      error: new ProgressEvent('ERROR', {}),
    });

    client.get('/target').subscribe({
      next: (returnValue) => {
        fail(`Expected error but got "${returnValue}"`);
      },

      error: (error: Error) => {
        expect(error).toBeTruthy();
        expect(error).toEqual(new Error('Backend returned code 400'));
        expect(console.error).toHaveBeenCalledWith(
          'Backend returned code 400',
          ', body was: ',
          expectedErrorResponse.error
        );

        done();
      },

      complete: () => fail('Complete must not be called'),
    });

    const httpRequest: HttpRequest<any> = new HttpRequest('GET', '/target');
    const err = new ProgressEvent('ERROR', {});

    httpController.expectOne(httpRequest).error(err, {
      status: HttpStatusCode.BadRequest,
      statusText: 'Bad Request',
    });
  });
});
