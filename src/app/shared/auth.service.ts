import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthStorageService } from './auth-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, 
              private router: Router, 
              private token: AuthStorageService) { }

  getRegisterUser(data: any): Observable<any>{
    let register$ = this.http.post(environment.API_URL + `api/register`, data)
    return register$;
  }

  getLoggedUser(data: any): Observable<any>{
    let login$ = this.http.post(environment.API_URL + `api/login`, data)
    return login$;
  }

  isLoggedIn(){
    return this.token.getToken()!=null;
  }

  getUserToken(){
    return this.token.getToken()!=null;
  }
  
  autoLogin(){
    if(this.getUserToken()){
      this.router.navigate(['dashboards/dashboard1'])
      return true
    }else {
      return false
    }
  }

  logOut(){
    this.token.signOut()
    this.router.navigate(['authentication/login'])
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
  }

  autoLogout(){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
      this.router.navigate(['authentication/login'])
    }, 600000)
  }
}
