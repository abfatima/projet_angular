import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  constructor(private http:HttpClient) { }
  
  getData():string
  {
    return"Hello from service";
  }

  getUsers(){

    return this.http.get("https://jsonplaceholder.typicode.com/users");//consommation d'une api rest

  }
}
