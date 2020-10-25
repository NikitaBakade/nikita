import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  FetchService} from '../fetch.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private act:ActivatedRoute, private fetch:FetchService, private router:Router) { }

  ngOnInit(): void {

    let finalpath = this.act.snapshot.params['myid']
    // console.log(finalpath)
    this.fetch.deleteData("addedproduct", finalpath).subscribe(
      (res)=>{
        this.router.navigate(['/showproducts']);
      }
    )
  }

}
