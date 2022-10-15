import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      })
  }

  getProducts(): Observable<any>{
    let getProducts$ = this.http.get(environment.API_URL + `api/products`, this.header);
    return getProducts$;
  }
}