import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Student} from './student';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  api_get_students="http://localhost:8086/CollegeManagementService/rest/StudentService/students";
  api_get="http://localhost:8086/CollegeManagementService/rest/StudentService/";
  api_delete="http://localhost:8086/CollegeManagementService/rest/StudentService/";
  api_create='http://localhost:8086/CollegeManagementService/rest/StudentService/create';
  api_update='http://localhost:8086/CollegeManagementService/rest/StudentService/update';
  api_recordCount='http://localhost:8086/CollegeManagementService/rest/StudentService/count';
  constructor(private http:HttpClient) { }

  getStudentDetails(offset, count){
    return this.http.get(this.api_get_students+"?offset="+offset+"&count="+count);

  }

  getRecordCount(){
    return this.http.get(this.api_recordCount);
  }


   public postStudentDetails(obj_s: Student): Observable<Student> {
     return this.http.post<Student>(this.api_create, obj_s, {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
 
        })
      }

       public deleteStudentDetails(studentId: string) {
        return this.http.delete(this.api_delete + studentId, {
          responseType:'text'
        });
      }

      getStudentById(studentId: string) {
      return this.http.get<Student>(this.api_get + studentId);
      }
      
      public updateStudentDetails(obj_s: Student): Observable<Student> {
 
         return this.http.put<Student>(this.api_update, obj_s, {
          headers: new HttpHeaders({
            'content-Type': 'application/json'
          })
     
            })
          }
      
}
