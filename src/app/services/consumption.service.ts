import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Consumption } from '../model/Consumption';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {
  URL = 'http://localhost:3000/consumption';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  save(consum: Consumption) {
    return this.httpClient
      .post<Consumption>(this.URL, JSON.stringify(consum), this.httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe();
  }

  getByDay(time: string) {
    return this.httpClient.get<Consumption[]>(`${this.URL}/?day=${time}`).pipe(
      catchError(this.handleError)
    );
  }

}
