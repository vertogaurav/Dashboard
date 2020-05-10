import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getUrl='https://api.rawg.io/api/platforms';
  getDetail()
  {
    // const market_Params=new HttpParams().set("market",window.localStorage.getItem("market"));
    return this.http.get(this.getUrl,{
      }
      )
  }
}
