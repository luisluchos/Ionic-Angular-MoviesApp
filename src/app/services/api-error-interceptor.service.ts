import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export class ApiErrorInterceptorService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            alert('Client side Error');
            errorMsg = `Error: ${error.error.message}`;
          }
          else {
            alert('Serve Error');
            errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          }
          alert(errorMsg);
          return throwError(errorMsg);
        })
      )
  }
}