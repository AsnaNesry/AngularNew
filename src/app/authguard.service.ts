import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private _router:Router ) {
    
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
 
         
        if (localStorage.getItem('currentUser')!=="admin"){
            alert('You are not allowed to view this page');
           
            this._router.navigate(['/login']);
            return false;
        } 
        return true;
    }
 
}