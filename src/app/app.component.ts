import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  
  constructor(private _router:Router ) {
    
  }

  user=localStorage.getItem('currentUser');
  title = 'StudentManagement';
  
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
