import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  userdata;
  studentId: string;
  single_student_data: Student = new Student();;
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
      console.log(this.single_student_data)
})
  
  }

}
/*function id(id: any) {
  throw new Error('Function not implemented.');
}*/

