import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Concours } from '../services/concours';
import { Etablissement } from '../models/etablissement';
import { Etabissement } from '../services/etabissement';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-concours-list',
  imports: [
   ReactiveFormsModule,
   NgIf
   
  ],
  templateUrl: './concours-list.html',
  styleUrl: './concours-list.css'
})
export class ConcoursList {

concoursForm!: FormGroup;
  etablissements: Etablissement[] = [];

  private concoursService = inject(Concours);
  private etablissementService = inject(Etabissement);


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.concoursForm = this.fb.group({
      name: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      etat: [0, Validators.required],
      etablissement: [null, Validators.required], // dropdown
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Charger la liste des établissements pour le select
    this.etablissementService.getAllEtablissements().subscribe(
      data => this.etablissements = data,
      err => console.error('Erreur lors du chargement des établissements', err)
    );
  }

  onSubmit(): void {
    if (this.concoursForm.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Champs manquants',
        text: 'Veuillez remplir tous les champs obligatoires.'
      });
      return;
    }

    this.concoursService.createConcours(this.concoursForm.value).subscribe(
      () => {
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Concours ajouté avec succès !'
        });
        this.concoursForm.reset();
      },
      error => {
        console.error('Erreur lors de l\'ajout du concours :', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible d\'ajouter le concours. Veuillez réessayer.'
        });
      }
    );
  }
}
