export class User {
    surname: string;
    firstname: string;
    nickname?: string;
    email: string;
    profilPicture: string;
    password: string;
    bio?: string;
    age?: number;
    country?: string;
    region?: string;
    isAdmin: boolean;
    isPremium: boolean;
    id?: number;

    constructor(input) {
        Object.assign(input);
    }
}
