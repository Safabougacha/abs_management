import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginEnseignantComponent } from './login-enseignant/login-enseignant.component';
import { LoginEtudiantComponent } from './login-etudiant/login-etudiant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';


const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'enseignant', component: EnseignantComponent },
{path:'loginadmin',component:LoginAdminComponent},
{path:'loginenseignant',component:LoginEnseignantComponent},
{path:'loginetudiant',component:LoginEtudiantComponent},
{path:'etudiant',component:EtudiantComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
