import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public url = "http://localhost:3000/";
  public obj_subject_share = new Subject();
  public obj_login = new Subject();

  constructor(public http:HttpClient) { }

  postData(jsonServerKey, obj){
    var finalpath = this.url+jsonServerKey;
    return this.http.post(finalpath,obj)
  }

  selectData(jsonServerKey){
    var finalpath = this.url + jsonServerKey ;
    return this.http.get(finalpath);
  }

  deleteData(jsonServerKey, id){
    var finalpath = this.url+jsonServerKey+"/"+id;
    return this.http.delete(finalpath);
  }

  editproduct(id){
    return this.http.get(this.url + '/edit' + id);
  }
  
  updateproduct( id , obj) {
    return this.http.put(this.url + '/edit' + id, obj);
  }

  shareLoginData(obj){
    this.obj_login.next(obj);
  }


}