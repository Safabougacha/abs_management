import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  users = [
    { username: 'ThourayaSakouhi01', password: 'enseignant123', role: '/enseignant' },
    { username: 'NadiaChoukri', password: '1234', role: '/enseignant' },
    { username: 'SafaBougacha01', password: 'etudiant123', role: '/etudiant' },
    { username: 'WalidElAyeb01', password: 'admin123', role: '/admin' }
  ];

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

    const user = this.users.find(u => u.username === enteredUsername && u.password === enteredPassword);
    if (user) {
      // Passer le nom d'utilisateur en tant que paramètre lors de la navigation
      this.router.navigate([user.role, { username: enteredUsername }]);
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }
}
