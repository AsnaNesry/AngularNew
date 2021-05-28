import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  collapsed = true;
  user=localStorage.getItem('currentUser');
  constructor(private _router:Router ) { }

  ngOnInit(): void {
  }
  displayMenuList():boolean{
    if(localStorage.getItem('currentUser') != null){
      return true;
    }
    return false;
  }

  

  logout(){
    localStorage.removeItem('currentUser');
    this._router.navigate(['']);
  }

}
