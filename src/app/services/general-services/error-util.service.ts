import { Injectable } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { Subject } from 'rxjs';

export function handleError(error: any) {
  console.error(error);
}

@Injectable({
  providedIn: 'root',
})
export class ErrorUtilService implements ErrorHandler {
  error = new Subject<string>();

  constructor() {}

  handleError(error: any) {
    console.log(error);

    // your custom error handling logic
  }

  setNewError(error: string) {
    this.error.next(error);
  }
}
