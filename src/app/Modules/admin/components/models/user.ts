export class User {
    id?: string;
    email: string;
    password: string;
    nom: string;
    prenom: string;
    role: string;
    tel: number;
    age: number;
    Niveau : string;
    etude: string;
    competences:string[];
    
    token?: string;
}