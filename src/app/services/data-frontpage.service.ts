import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { InfoSite } from '../models/infoSite';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class DataFrontpageService {
  private apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  public getDataQuienesSomos(){
    return this.httpClient.get<InfoSite[]>(this.apiUrl+'infoSiteQuienesSomos/', this.httpOptions);
   }
   public getMenu() { 
    return this.httpClient.get<Menu[]>(this.apiUrl+'menu/', this.httpOptions);
  }
}
