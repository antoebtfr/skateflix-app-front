export class Admin {
    id: number;
    prenom: string;
    nom: string;
    role: string;

    constructor(input?) {
        Object.assign(input);
    }
}
