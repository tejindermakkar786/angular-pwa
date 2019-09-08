import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCleint: HttpClient) {


  }

  getUsers() {
    return this.httpCleint.get<any>("https://jsonplaceholder.typicode.com/users");
  }

}
