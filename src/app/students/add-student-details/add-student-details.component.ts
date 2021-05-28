import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {
  obj_s : Student = new Student();
  name:string="";
  angForm: FormGroup;
 
  constructor(public objuser:StudentService, public router:Router) {

   }
 

 

  ngOnInit(): void {
  }
  

SaveStudentDetails(){
  this.objuser.postStudentDetails(this.obj_s).subscribe(
    (data : Student) =>
    console.log(data)
  );
  alert(this.obj_s.firstName + " details saved");
}



}

