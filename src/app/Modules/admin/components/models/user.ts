export class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    tel: number;
    age: number;
    Niveau : string;
    etude: string;
    competences:string[];
    
    token?: string;
}