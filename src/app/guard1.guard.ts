import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TransferService } from './transfer.service';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {
  constructor(private route:Router, private trans:TransferService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(localStorage);
    return true;
  }
  
}
