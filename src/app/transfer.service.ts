import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  public url = "http://localhost:3000/";
  public obj_subject_share = new Subject();

  constructor(public http:HttpClient) { }


  postData(jsonServerKey, obj){
    // console.log(jsonServerKey,obj)
    var finalpath = this.url+jsonServerKey;
    return this.http.post(finalpath,obj)
  }

  selectData(jsonServerKey){
    // console.log(jsonServerKey)
    var finalpath = this.url + jsonServerKey ;
    // console.log(finalpath);
    return this.http.get(finalpath);
  }

  storedata(mykey,myvalue){
    localStorage.setItem(mykey,myvalue);
  }

  getData(mykey){
    return localStorage.getItem(mykey)
  }

  deleteData(mykey){
    localStorage.removeItem(mykey);
  }
  
}