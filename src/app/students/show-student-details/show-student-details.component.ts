import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentService } from 'src/app/student.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-show-student-details',
  templateUrl: './show-student-details.component.html',
  styleUrls: ['./show-student-details.component.css']
})
export class ShowStudentDetailsComponent implements OnInit {
  config: any;
  collection = { count: 60, data: [] };
  colData=[
    {field:'studentId',header:'Student Id'},
    {field:'firstName',header:'First Name'},
    {field:'lastName',header:'Last Name'},
    {field:'batchId',header:'Batch Id'},
    {field:'gender',header:'Gender'}    
  ];

  angForm: FormGroup;
  single_student_data: Student = new Student();
  student: Student = new Student();
  currentIndex = -1;
  page = 1;
  count = 60;
  pageSize = 3;
  offset: any;
  searchKey = "";
  totalRecord = 0;
  itemsperpage = "";

  constructor(public studentService: StudentService, public router: Router, private fb: FormBuilder) {
  }

  pageChanged(event) {
    this.page = event;
    this.getallStudentDetails();
  }

  ngOnInit(): void {
    this.getallStudentDetails();
    
  }
  getallStudentDetails() {

    this.offset = ((this.page - 1) * this.pageSize);
    this.studentService.getStudentDetails(this.offset, this.pageSize).subscribe((data: Student[]) => {
      this.collection.data = data;
    })
    this.getRecord();
  }

  getRecord() {

    this.studentService.getRecordCount().subscribe((rowCount: number) => {
      this.collection.count = rowCount;
    });
  }

  viewSingleStudentDetail(id: string) {
    this.studentService.getStudentById(id).subscribe((data) => {
      this.single_student_data = data;
    })
  }

  deleteStudentDetails(record: Student) {
    
    if (confirm("Are you sure to delete")) {
      this.studentService.deleteStudentDetails(record.studentId).subscribe(
        () => this.getallStudentDetails()
      )
    }
  }

  onClickUpdate(record: Student){
    this.router.navigate(['/EditStudent/', record.studentId]);
  }

  showSearch() {
    
    this.studentService.getStudentById(this.searchKey).subscribe((data) => {
      this.collection.data =  [data];
    })
  }

  rowSelection(record:Student) {
    this.router.navigate(['/ShowStudent/', record.studentId]);
  }



}
