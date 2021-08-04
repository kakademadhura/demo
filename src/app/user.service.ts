import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url ="";
  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url);
  }

  delete(body){
    return this.http.delete(body);
  }

  updateUser(user){
   const body=user;
  return this.http.post(this.url,body);
  }

  getUserById(id){
    const body=id;
    return this.http.post(this.url,body);
  }

}
