import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/user"
  constructor(private http: HttpClient) { }
  getAllUser(){
    return this.http.get(this.url);
  }
}
