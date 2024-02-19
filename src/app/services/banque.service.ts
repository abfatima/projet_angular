import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(private http:HttpClient) { }

  getBanques(){

    return this.http.get("http://127.0.0.1:8081/banques/");

  }

}
