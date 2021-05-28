import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BatchComponent } from './batch/batch.component';
import { StudentsComponent } from './students/students.component';
import { ShowStudentDetailsComponent} from 'src/app/students/show-student-details/show-student-details.component';
import { AddStudentDetailsComponent } from  'src/app/students/add-student-details/add-student-details.component';
import { EditStudentDetailsComponent } from 'src/app/students/edit-student-details/edit-student-details.component';
import { ViewComponent } from 'src/app/students/show-student-details/view/view.component';
import {EditComponent} from 'src/app/students/edit-student-details/edit/edit.component';
import {LoginComponent} from './login/login.component';
import {CanActivate } from '@angular/router';
import { AuthGuardService } from './authguard.service';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,canActivate: [AuthGuardService] },
  {path:'TeacherAdministration',component:TeachersComponent},
  {path:'BatchAdministration',component:BatchComponent},
  {path:'StudentAdministration',component:StudentsComponent, canActivate: [AuthGuardService] },
  {path:'ShowStudentDetails',component:ShowStudentDetailsComponent},
  {path:'AddStudentDetails',component:AddStudentDetailsComponent},
  {path:'EditStudentDetails',component:EditStudentDetailsComponent},
  {path:'ShowStudent/:studentId',component:ViewComponent},
  {path:'EditStudent/:studentId',component:EditComponent},
  {path:'About',component:AboutComponent},
  {path: "",component:LoginComponent },
  { path: '**', redirectTo: '' }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
