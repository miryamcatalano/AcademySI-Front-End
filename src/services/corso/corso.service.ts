import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CorsoDto} from "../../model/corsoDto";
import {RegisterRequest} from "../../model/registerRequest";
import {CorsoRegisterRequest} from "../../model/corsoRegisterRequest";

@Injectable({
  providedIn: 'root'
})
export class CorsoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<CorsoDto[]>{
    return this.http.get<CorsoDto[]>('http://localhost:8080/api/corsi/').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  search(nome : string): Observable<CorsoDto[]>{

    const options = {params : new HttpParams().set('nome', nome)}
    return this.http.get<CorsoDto[]>('http://localhost:8080/api/corsi/search', options).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  registraCorso(corso: CorsoRegisterRequest) : Observable<void>{
    return this.http.post<void>('http://localhost:8080/api/corsi/', corso).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

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
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
