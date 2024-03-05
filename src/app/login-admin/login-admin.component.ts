import { Component } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 import { AuthService } from '../Services/login-service.service';

 @Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
 })
 export class LoginAdminComponent {
//   loginForm!: FormGroup;
//   loading = false;
//   submitted = false;
//   error = '';

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   get formControls() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.loginForm.invalid) {
//       return;
//     }

//     this.loading = true;
//     this.authService.login(this.formControls.username.value, this.formControls.password.value)
//       .subscribe(
//         data => {
//           this.router.navigate(['/admin']); // Rediriger vers le tableau de bord après login
//         },
//         error => {
//           this.error = error;
//           this.loading = false;
//         });
  }
 //}
