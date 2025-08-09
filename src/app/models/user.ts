export class User {
    userId: number;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    roleId: number;
    etablissementId: number;
    lieuNaissance: string;
    dateNaissance: string;
    nationalite: string;
    phone: string;
    address: string;
    serie: string;

    constructor(
        userId: number,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        roleId: number,
        etablissementId: number,
        lieuNaissance: string,
        dateNaissance: string,
        nationalite: string,
        phone: string,
        address: string,
        serie: string
    ) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.roleId = roleId;
        this.etablissementId = etablissementId;
        this.lieuNaissance = lieuNaissance;
        this.dateNaissance = dateNaissance;
        this.nationalite = nationalite;
        this.phone = phone;
        this.address = address;
        this.serie = serie;
    }
}


