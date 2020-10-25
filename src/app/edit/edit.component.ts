import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  params: any;
  userdata: any;
  postData: any;
  constructor(private fb: FormBuilder, private fetch:FetchService, private router: Router, private route: ActivatedRoute) { }
  
  addUser = this.fb.group({
    name:['', [Validators.required]],
      newprice:['', [Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
      oldprice:['', [Validators.required,Validators.minLength(2),Validators.maxLength(12)]],
      productdesc:['', [Validators.required]],
  });

  

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (res) => {
        this.params = res;
        this.getproducteDetails(res.id);
      }
    );
  }
  showError = {
    show: false,
    message: ''
  };
  showSuc = {
    show: false,
    message: ''
  };

  getproducteDetails( id ) {
    this.fetch.editproduct(id).subscribe((res: any) => {
      this.userdata = res.result;
    });
  }
  updateproduct() {
    const object: any = this.postData.value;
    this.fetch.updateproduct(this.params.id, object).subscribe(
      (res: any) => {
        this.showSuc.show = true;
        this.showSuc.message = 'product update Successfuly';
        setTimeout(() => {
          this.router.navigate(['/addproduct']);
        }, 2000);
      },
    );
  }
  restError() {
    this.showError = {
      show: false,
      message: ''
    };
  }


  add_record(obj){}

}
