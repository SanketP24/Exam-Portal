import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Signup } from './pages/signup/signup';
import { Login } from './pages/login/login';
import {MatFormField, MatInputModule} from '@angular/material/input';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [App, Navbar, Footer, Signup, Login],
  imports: [BrowserModule,FormsModule, AppRoutingModule, MatButtonModule, MatSelectModule, MatIconModule, MatInputModule, MatFormFieldModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
