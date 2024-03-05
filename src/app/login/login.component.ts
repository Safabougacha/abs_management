import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Routes , RouterModule} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const enteredUsername = this.loginForm.value.username;
    const enteredPassword = this.loginForm.value.password;

    // Simulation d'une requête de connexion réussie
    // Vous devriez appeler votre service d'authentification ici
    // pour vérifier les informations d'identification
    const user = this.users.find(u => u.username === enteredUsername && u.password === enteredPassword);
    if (user) {
      // Rediriger en fonction du rôle
      this.router.navigate([user.role, { username: enteredUsername }]);
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }

  // Fonction pour rediriger vers le rôle sélectionné
  navigateToRole(role: string) {
    switch (role) {
      case 'enseignant':
        this.router.navigate(['/loginenseignant']);
        break;
      case 'etudiant':
        this.router.navigate(['/loginetudiant']);
        break;
      case 'admin':
        this.router.navigate(['/loginadmin']);
        break;
      default:
        break;
    }
  }

  // Liste des utilisateurs (à remplacer par l'appel au service d'authentification)
  users = [
    { username: 'ThourayaSakouhi01', password: 'enseignant123', role: '/enseignant' },
    { username: 'NadiaChoukri', password: '1234', role: '/enseignant' },
    { username: 'SafaBougacha01', password: 'etudiant123', role: '/etudiant' },
    { username: 'WalidElAyeb01', password: 'admin123', role: '/admin' }
  ];
}
