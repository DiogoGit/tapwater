import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  URL = 'http://localhost:3000/users';

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

  getByUsername(username: string) {
    return this.httpClient.get<User[]>(`${this.URL}/?username=${username}`).pipe(
      catchError(this.handleError)
    );
  }

  save(user: User) {
    return this.httpClient
      .post<User>(this.URL, JSON.stringify(user), this.httpOptions).pipe(
        catchError(this.handleError)
      ).subscribe();
  }

  // patch(user: User) {
  //   return this.httpClient
  //     .patch<User>(
  //       `${this.URL}/${user.id}`,
  //       JSON.stringify(user),
  //       this.httpOptions
  //     ).pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // update(user: User) {
  //   return this.httpClient
  //     .put<User>(
  //       `${this.URL}/${user.id}`,
  //       JSON.stringify(user),
  //       this.httpOptions
  //     ).pipe(
  //       catchError(this.handleError)
  //     );
  // }
}
