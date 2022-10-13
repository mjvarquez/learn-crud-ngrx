import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getRegisterUser(data: any): Observable<any>{
    let register$ = this.http.post(environment.API_URL + `api/register`, data)
    return register$;
  }

  // getLoggedUser(data: any): Observable<any>{
  //   return 
  // }
}
