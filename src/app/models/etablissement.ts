export class Etablissement {
  etablissementId: number;
  libelle: string;
  sigle: string;
  logo: string;
  address: string;
   

  constructor(etablissementId: number, libelle: string, sigle: string, logo: string,address: string) {
    this.etablissementId = etablissementId;
    this.libelle = libelle;
    this.sigle = sigle;
    this.logo = logo;
    this.address= address;

  }
}
