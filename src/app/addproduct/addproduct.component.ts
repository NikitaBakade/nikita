import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public productForm:FormGroup;
  public msg:String;
  id: number;
  name: string;
  newprice: string;
  oldprice: string;
  productdesc: string;
  constructor(private fb : FormBuilder, private trans:TransferService, private route:Router, private fetch: FetchService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name:['', [Validators.required]],
      newprice:['', [Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
      oldprice:['', [Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
      productdesc:['', [Validators.required]],
    });
  }

  // add_record(txt){
  //   // alert("test");
  //   console.log(txt);
  //   console.log(txt.value);
  //   if(txt.value == ""){
  //     console.log("Invalid data");
  //     this.msg ="Invalid data";
  //   }
  //   else{
  //     this.fetch.postData("addedproduct", {name:txt.value, newprice:txt.value, oldprice:txt.value, productdesc:txt.value}).subscribe(
  //       (res)=>{
  //         console.log(res);
  //       },
  //       (error)=>{
  //         console.log(error);
  //       }
  //     )
  //   }
  //   this.route.navigate(['/showproducts']);
  // }

  addData(addobj){
    // console.log(addobj);
    console.log(addobj.value);
    this.fetch.postData("addedproduct",addobj.value).subscribe(
      (res)=>{
        // this.msg = "New Record Added";
        console.log(res);
      },
      (err)=>{

      }
    )
    this.route.navigate(['/showproducts']);
  }

}
