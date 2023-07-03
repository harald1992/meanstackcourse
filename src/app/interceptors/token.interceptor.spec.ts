import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('TokenInterceptor', () => {
  let http: HttpClient;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should add withCredentials to the request to allow receiving cookies from the backend', () => {
    http.get('/target').subscribe();

    const req = controller.expectOne('/target');
    req.flush('');
    controller.verify();

    expect(req.request.withCredentials).toEqual(true);
  });
});
