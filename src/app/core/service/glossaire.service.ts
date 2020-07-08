import { Injectable } from '@angular/core';
import { Glossaire} from '../../../shared/model/glossaire';
import { GLOSSAIRES} from '../../../shared/model/mock-glossaires';

import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlossaireService {

  private glossairesUrl = 'api/glossaires';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getGlossaires(): Observable<Glossaire[]> {
    return this.http.get<Glossaire[]>(this.glossairesUrl)
    .pipe(
      tap(_ => this.log('fetched glossaires')),
      catchError(this.handleError<Glossaire[]>('getGlossaires', []))
    );
  }

  getGlossaire(id: number): Observable<Glossaire> {
    const url = `${this.glossairesUrl}/${id}`;
    return this.http.get<Glossaire>(url).pipe(
      tap(_ => this.log(`fetched glossaire id=${id}`)),
      catchError(this.handleError<Glossaire>(`getGlossaire id=${id}`))
    );
  }

  /* GET glossaires whose name contains search term */
  searchGlossaires(term: string): Observable<Glossaire[]> {
    if (!term.trim()) {
      // if not search term, return empty glossaire array.
      return of([]);
    }
    return this.http.get<Glossaire[]>(`${this.glossairesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          this.log(`found glossaires matching "${term}"`) :
          this.log(`no glossaire matching "${term}"`)),
      catchError(this.handleError<Glossaire[]>('searchGlossaires', []))
    );
  }

  /** PUT: update the glossaire on the server */
  updateHero(glossaire: Glossaire): Observable<any> {
    return this.http.put(this.glossairesUrl, glossaire, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${glossaire.id}`)),
      catchError(this.handleError<any>('updateGlossaire'))
    );
  }

  /** POST: add a new glossaire to the server */
  addGlossaire(glossaire: Glossaire): Observable<Glossaire> {
    return this.http.post<Glossaire>(this.glossairesUrl, glossaire, this.httpOptions).pipe(
      tap((newGlossaire: Glossaire) => this.log(`added hero w/ id=${newGlossaire.id}`)),
      catchError(this.handleError<Glossaire>('addGlossaire'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(glossaire: Glossaire | number): Observable<Glossaire> {
    const id = typeof glossaire === 'number' ? glossaire : glossaire.id;
    const url = `${this.glossairesUrl}/${id}`;

    return this.http.delete<Glossaire>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted glossaire id=${id}`)),
      catchError(this.handleError<Glossaire>('deleteGlossaire'))
    );
  }

  private log(message: string) {
    this.messageService.add(`GlossaireService: ${message}`);
  }
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(private http: HttpClient, private messageService: MessageService) { }
}
