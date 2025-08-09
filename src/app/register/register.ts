import { Component, inject } from '@angular/core';
import { Users } from '../services/users';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,
    NgIf,
    
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

    userForm!: any;

  private service = inject(Users);
  constructor(private fb: FormBuilder) {
    this.userForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      roleId: new FormControl(''),
      etablissementId: new FormControl(''),
      lieuNaissance: new FormControl(''),
      dateNaissance: new FormControl(''),
      nationalite: new FormControl(''),
      serie: new FormControl(''),
      address: new FormControl(''),
      phone: new FormControl(''),

    });
  }
ngOnInit(): void {
  this.userForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    roleId: [null, Validators.required],
    etablissementId: [null, Validators.required],
    lieuNaissance: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    nationalite: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    serie: ['', Validators.required],
  });
}


  onSubmit(): void {
    console.log(this.userForm.value + "tesstettetetetetet");
    this.service.createUser(this.userForm.value).subscribe(
      (response) => {
        Swal.fire({
          title: "Ajout d'un utilisateur",
          text: "user ajouté avec succes",
          icon: "success"
        });
        this.userForm.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible d\'ajouter l\'utilisateur. Veuillez réessayer.'
        });
      }
    );
  }

}
