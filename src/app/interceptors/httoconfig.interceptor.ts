import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, fromEvent, throwError } from 'rxjs';
import { map, mapTo, retryWhen, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  token = '';
  constructor(public router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = window.localStorage.getItem('token') || this.token;

    if (this.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${this.token}`,
        },
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.removeItem('token');
          localStorage.removeItem('nombres');
          this.router.navigate(['/']);
        }

        return throwError(error);
      })
    );
  }
}
