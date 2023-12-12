import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom, map } from 'rxjs';
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

  // GetAllCountries(): {
  //   return this.http.get<Country[]>(`${this.url}?format=json`, this.httpOptions);
  // }

  GetCountry(id: string) {
    return this.http.get(`${this.url}${id}/?format=json`);
  }

  GetTotalPop(id: string) {
    return this.http.get(`${this.url}${id}/indicator/SP.POP.TOTL?date=2022&format=json`);
  }

  GetGDP(id: string) {
    return this.http.get(`${this.url}${id}/indicator/NY.GDP.MKTP.CD?date=2022&format=json`);
  }
}
