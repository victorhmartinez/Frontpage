import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})


export class AuthService {
  AUTH_SERVER: string = 'http://ec2-18-232-102-175.compute-1.amazonaws.com:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient, ) { 
    

  }

  register(user: UserI): Observable<JwtResponseI> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`,
      user, httpOptions).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.token);
          }
        })
      );
  }

  login(user: UserI): Observable<JwtResponseI> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<JwtResponseI>("http://ec2-18-232-102-175.compute-1.amazonaws.com:3000/login/user",
      user, httpOptions).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            this.saveToken(JSON.stringify(res["token"]));
          }
        })
      );
  }


  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}

