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
    // headers: new HttpHeaders(
    //   {
    //     'Content-Type':'application/json'
    //   }
    // )
  }

  headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set("Access-Control-Expose-Headers","Content-Encoding, Authorization")
    .set("Access-Control-Max-Age","700")
    .set('Content-Type','application/json')
    .set('Access-Control-Request-Method', 'OPTIONS,GET,PUT,POST,DELETE')
    .set('Access-Control-Allow-Headers','X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type')
    .set("Access-Control-Request-Headers","Content-Type")
    .set("Access-Control-Allow-Credentials","true")
  requestOptions = {  headers: this.headers};  

  url : string = environment.WORLDBANK_URL;

  constructor(private http: HttpClient) { }

  GetAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}?format=json`, this.httpOptions);
  }

  // GetCountry(id: string): Observable<any> {
  //   console.log(`${this.url}${id}/?format=json`)
  //   return this.http.get<any>(`${this.url}${id}/?format=json`);
  // }

  GetCountry(id: string) {
    return this.http.get(`${this.url}${id}/?format=json`);
  }
}
