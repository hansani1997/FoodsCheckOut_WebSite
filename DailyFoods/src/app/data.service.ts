import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string ="/assets/shops/list.json";

  constructor(private http:HttpClient) { }
  getdata():Observable<Data[]>{
    return this.http.get<Data[]>(this._url);
  }
}
