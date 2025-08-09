import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../services/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm!: FormGroup;


  constructor(
    public service: Users,
    public router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  onLogin(): void {
      console.log(this.loginForm.value + "tesstettetetetetet");
      this.service.getLogin(this.loginForm.value).subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
          this.loginForm.reset();
        },
        error => {
          console.error('Erreur lors de l\'ajout :', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Impossible de se connecter. Veuillez réessayer.'
          });
        }
      );
    }
  }



