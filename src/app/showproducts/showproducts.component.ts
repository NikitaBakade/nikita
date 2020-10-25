import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-showproducts',
  templateUrl: './showproducts.component.html',
  styleUrls: ['./showproducts.component.css']
})
export class ShowproductsComponent implements OnInit {
  public allUsers :any;
  public showData:any;
  constructor(private fetch:FetchService) { }

  ngOnInit(): void {
    this.fetch.selectData("addedproduct").subscribe(
      (res)=>{
        // console.log("Response from service");
        // console.log(res);
        this.allUsers = res;
      }
    );
  }

}
