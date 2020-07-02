import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Pc} from "../models/pc";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PcService {
  marquePc = ['Dell', 'HP', 'Apple', 'Asus'];
  typePc = ['Portable', 'Fixe', 'Tablette hybride'];
  categoriePc = ['Gaming', 'Bureautique', 'Premier prix']
  apiURL = 'http://localhost:3000/pc';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getAllPc(): Observable<Pc[]> {
    return this.http.get<Pc[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getOnePcById(id: number): Observable<Pc> {
    return this.http.get<Pc>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  addPc(pc: Pc): Observable<Pc>{
    return this.http.post<Pc>(this.apiURL, pc, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deletePc(id: number): Observable<Pc>{
    return this.http.delete<Pc>(this.apiURL + '/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  edit(pc: Pc){
    return this.http.put<Pc>(this.apiURL + '/' + pc.id , pc, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
// Get client-side error
      errorMessage = error.error.message;
    } else {
// Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
