 
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { isNullOrUndefined } from 'util';



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  AUTH_SERVER: string = 'http://ec2-18-232-102-175.compute-1.amazonaws.com:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient ) { 
  }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  //Token
  login(user: UserI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>("http://ec2-18-232-102-175.compute-1.amazonaws.com:3000/login/user",
      user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(JSON.stringify(res["token"]));
            this.setUser(user);
          }
        })
      );
  }

  private saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  setUser(user: UserI): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  //Guards
  getCurrentUser(): UserI {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: UserI = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  //Logout
  }

