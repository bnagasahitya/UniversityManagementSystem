import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: StudentsComponent  },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomeComponent},
   { path: 'students', component: StudentsComponent },
   { path: 'courses', component: CoursesComponent },

   { path: 'faculty', component: FacultyComponent },
   { path: 'departments', component: DepartmentComponent },
  // { path: 'logout', component: LogoutComponent,\  },
  { path: 'addstudent/:id', component: AddStudentComponent },
  { path: 'add/:id', component: AddCourseComponent },
  { path: 'adddepartment/:id', component: AddDepartmentComponent },


  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
