import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  userdata;
  studentId: string;
  single_student_data;
  obj_s :Student= new Student();
  constructor(private route: ActivatedRoute, public objuser:StudentService, public router:Router) {
    
  }

  

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['studentId'];
    console.log(this.studentId)
    this.viewSingleStudentDetail()
  }

  //get student detail by id
  viewSingleStudentDetail(){
    this.objuser.getStudentById(this.studentId).subscribe((data)=>{
      this.single_student_data=data;
})
  
  }

  EditStudentDetails(student: Student){
    this.objuser.updateStudentDetails(student).subscribe(
      (data : Student) =>
      console.log(data)
     
      
    );
    
    alert("Details edited successfully");
      
  }

}
