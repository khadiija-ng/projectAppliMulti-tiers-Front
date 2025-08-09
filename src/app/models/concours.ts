import { Etablissement } from "./etablissement";

export class Concours {
    concoursId: number;
    name: string;
    date_debut: Date;
    date_fin: Date;
    etat: number;
    etablissement: Etablissement; 
    image: string;
    description: string;
    constructor(concoursId: number, name: string, date_debut: Date, date_fin: Date, etat: number, etablissement: Etablissement, image: string, description: string) {
        this.concoursId = concoursId;
        this.name = name;
        this.date_debut = date_debut;
        this.date_fin = date_fin;
        this.etat = etat;
        this.etablissement = etablissement;
        this.image = image;
        this.description = description;
    }
}
