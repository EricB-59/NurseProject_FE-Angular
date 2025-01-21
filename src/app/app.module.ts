import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetAllNursesComponent } from './get-all-nurses/get-all-nurses.component';
import { SearchByNameNursesComponent } from './search-by-name-nurses/search-by-name-nurses.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginNursesComponent } from './login-nurses/login-nurses.component';
import { provideRouter } from '@angular/router';
import { RegisterNursesComponent } from './register-nurses/register-nurses.component';
import {provideHttpClient, withFetch} from '@angular/common/http';
import { UpdateNursesComponent } from './update-nurses/update-nurses.component';
import { DeleteNursesComponent } from './delete-nurses/delete-nurses.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByNameNursesComponent,
    GetAllNursesComponent,
    LoginNursesComponent,
    RegisterNursesComponent,
    UpdateNursesComponent,
    DeleteNursesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
