import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { LoggerService } from '../services/logger/logger.service';

@Injectable()
export class AuhthentificationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    LoggerService.log('intercept http request', request)
    return next.handle(request).pipe(
      tap(event => {
        LoggerService.log('intercept http response', event)
      }),
      catchError(error => {
        LoggerService.log('intercept http response error', error)
        return of(error)
      })
    );
  }
}


