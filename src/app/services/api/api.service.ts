import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/env/env';
import { Country } from 'src/app/models/Country';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }

  url : string = environment.WORLDBANK_URL;

  constructor(private http: HttpClient) { }

  GetAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}?format=json`, this.httpOptions);
  }

  GetCountry(id: string): Observable<any> {
    console.log(`${this.url}${id}/?format=json`)
    return this.http.get<any>(`${this.url}${id}/?format=json`);
  }
}
