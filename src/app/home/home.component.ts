import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransferService } from '../transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loginForm:FormGroup;
  public registerForm:FormGroup;
  public msg: string ="";
  
  constructor(private fb : FormBuilder, private trans:TransferService, private route:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', [Validators.required,Validators.minLength(4),Validators.maxLength(12)]]
    });

    this.registerForm = this.fb.group({
      name:['', [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      email:['', [Validators.required,Validators.email]],
      dob:['', [Validators.required,Validators.pattern(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/)]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
    });
  }

  addData(addobj){
    // console.log(addobj);
    // console.log(addobj.value);
    this.trans.postData("registereduser",addobj.value).subscribe(
      (res)=>{
        // console.log(res);
      },
      (err)=>{

      }
    )
    // this.route.navigate(['/addproduct']);

  }

  newData(addobj){
    // console.log(addobj);
    // console.log(addobj.value);
    let logemail=addobj.value.email;
    let logpass=addobj.value.password;
    console.log(logemail,logpass)

    this.trans.postData("loginuser",addobj.value).subscribe(
      (res)=>{
        // console.log(res);
      },
      (err)=>{

      }
    )

    this.trans.selectData("registereduser").subscribe(
      (res)=>{
        console.log(res);
        var number=0;
        for(var out in res){
          // console.log(out);
          // console.log(res[out]);
          let emailOfJson = res[out]['email'];
          let passwordOfJson = res[out]['password'];

          if(logemail==emailOfJson && logpass==passwordOfJson){
            this.trans.storedata("name" , res[out]['name']);
            this.trans.storedata("email" , res[out]['email']);
            this.trans.storedata("dod" , res[out]['dob']);
            this.trans.storedata("password" , res[out]['password']);
            // this.trans.storedata("userid" , res[out]['id']);
            number++;
            break;
          }

        }

        if(number>0){
          this.msg = "Valid";
          this.route.navigate(['/addproduct']);
        }
        else{
          this.msg = "Invalid email or password";
        }

      },
      (err)=>{

      }
    )

    // this.route.navigate(['/addproduct']);

  }

}
