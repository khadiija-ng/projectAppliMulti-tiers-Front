import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Etabissement } from '../services/etabissement';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-etablissement',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './etablissement.html',
  styleUrl: './etablissement.css'
})
export class Etablissement implements OnInit {

  etablissementForm!: any;

  private service = inject(Etabissement);
  constructor(private fb: FormBuilder) {
    this.etablissementForm = new FormGroup({
      libelle: new FormControl(''),
      sigle: new FormControl(''),
      logo: new FormControl(''),
      address: new FormControl('')
    });
  }
  ngOnInit(): void {
    this.etablissementForm = this.fb.group({
      libelle: ['', Validators.required],
      sigle: ['', Validators.required],
      logo: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  onSubmit(): void {
    console.log(this.etablissementForm.value + "tesstettetetetetet");
    this.service.createEtablissement(this.etablissementForm.value).subscribe(
      (response) => {
        Swal.fire({
          title: "Ajout d'un etablissement",
          text: "Etablissement ajouté avec succes",
          icon: "success"
        });
        this.etablissementForm.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible d\'ajouter l\'établissement. Veuillez réessayer.'
        });
      }
    );
  }

}
