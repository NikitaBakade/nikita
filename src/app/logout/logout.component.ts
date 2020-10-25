import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from '../fetch.service';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router, private trans:TransferService,  private fetch: FetchService) { }

  ngOnInit(): void {
    this.trans.deleteData("name");
    this.trans.deleteData("email");
    this.trans.deleteData("dob");
    this.trans.deleteData("password");

    this.fetch.shareLoginData({isLoggedIn:false, email:"", password:""})
    this.route.navigate(['/']);
  }

    // this.route.navigate(['/']);

}
