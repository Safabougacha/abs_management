import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginEnseignantComponent } from './login-enseignant/login-enseignant.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginAdminComponent,
    LoginEnseignantComponent,
    LoginEtudiantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Ajouter ReactiveFormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }