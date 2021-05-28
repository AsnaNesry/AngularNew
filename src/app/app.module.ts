import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BatchComponent } from './batch/batch.component';
import { StudentsComponent } from './students/students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService} from './student.service';
import { ShowStudentDetailsComponent } from './students/show-student-details/show-student-details.component';
import { AddStudentDetailsComponent } from './students/add-student-details/add-student-details.component';
import { EditStudentDetailsComponent } from './students/edit-student-details/edit-student-details.component';
import { ViewComponent } from './students/show-student-details/view/view.component';
import { EditComponent } from './students/edit-student-details/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './authguard.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { AboutComponent } from './about/about.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TeachersComponent,
    BatchComponent,
    StudentsComponent,
    ShowStudentDetailsComponent,
    AddStudentDetailsComponent,
    EditStudentDetailsComponent,
    ViewComponent,
    EditComponent,
    LoginComponent,
    ModalComponent,
    AboutComponent,
    PaginationComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgbNavModule, 
    NgbDropdownModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [AuthGuardService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
