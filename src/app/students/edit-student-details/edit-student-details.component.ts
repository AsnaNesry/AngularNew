import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css']
})
export class EditStudentDetailsComponent implements OnInit {
  studentId: string;
  userdata;
  single_student_data :Student= new Student();
  obj_s :Student= new Student();
  constructor(
    public objuser:StudentService, public router:Router,private fb: FormBuilder
  ) { 
   
  }

  ngOnInit(): void {
   
  }
 

  viewSingleStudentDetail(id: string){
    this.objuser.getStudentById(id).subscribe((data)=>{
      console.log(data);
      this.single_student_data=data;
})
  }

}
