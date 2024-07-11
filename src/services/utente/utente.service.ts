import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Observable, catchError, retry, throwError, of} from "rxjs";
import {UtenteDto} from "../../model/utenteDto";
import {RegisterRequest} from "../../model/registerRequest";
import {CorsoDto} from "../../model/corsoDto";
import {LoginRequest} from "../../model/loginRequest";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  registerRequest : RegisterRequest = new RegisterRequest();

  loginRequest : LoginRequest = new LoginRequest();

  constructor(private http: HttpClient) { }

  getAll(): Observable<UtenteDto[]>{
    return this.http.get<UtenteDto[]>('http://localhost:8080/api/utente/').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  registraUtente(utente: RegisterRequest) : Observable<void>{
    return this.http.post<void>('http://localhost:8080/api/utente/', utente).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  loginUtente(utente: LoginRequest) : Observable<void>{
    return this.http.post<void>('http://localhost:8080/api/utente/login', utente).pipe(
      retry(3),
      catchError(err => {
        console.error("loginError", err);
        return throwError(err);
      }),
    );
  }


 /* addCorso(id: string) : Observable<void>{
    const options = {}
    /!*return this.http.get<CorsoDto[]>('http://localhost:8080/api/corsi/search', options).pipe(
      retry(3),
      catchError(this.handleError)
    );*!/
  }*/

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
