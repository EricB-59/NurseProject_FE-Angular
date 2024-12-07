import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllNursesComponent } from './get-all-nurses/get-all-nurses.component';
import { SearchByNameNursesComponent } from './search-by-name-nurses/search-by-name-nurses.component';
import { LoginNursesComponent } from './login-nurses/login-nurses.component';
import { RegisterNursesComponent } from './register-nurses/register-nurses.component';

const routes: Routes = [
  { path: '', component: RegisterNursesComponent },
  { path: 'getAll', component: GetAllNursesComponent },
  { path: 'login', component: LoginNursesComponent },
  { path: 'register', component: RegisterNursesComponent },
  { path: 'searchByName', component: SearchByNameNursesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
