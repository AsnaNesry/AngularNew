import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalConfig } from '../modal.config';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() public modalConfig:ModalConfig
  @ViewChild('modal') private modalComponent: ModalComponent
  async openModal(){
    return await this.modalComponent.open()
  }
  
  loginForm: FormGroup;
  submitted = false;
  isAvailable;
  
  showModal: boolean;
  registerForm: FormGroup;
  submit = false;
  
  constructor(private fb: FormBuilder,private _router:Router) {
  }


  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  ngOnInit(): void {
    this.createForm();
    this.show();
    
  }

  get formControls(){
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],

    }
    );
  }

  login() {
    
    this.submitted = true

    if(this.loginForm.invalid){
      return;
    }

    var username = this.loginForm.value.username;
    var password = this.loginForm.value.password;
      if (username == "admin" && password == "admin") {
        localStorage.setItem('currentUser', username)
        this._router.navigate(['/Home']);
    
        return this.isAvailable = true;
       }
       else {
         this.showModal=false;
         return this.isAvailable = false;
       }
      }
       
    
       
  
}
