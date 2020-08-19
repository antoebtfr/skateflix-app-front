export class User {
    surname: string;
    firstname: string;
    nickname?: string;
    email: string;
    password: string;
    bio?: string;
    age?: string;
    country?: string;
    region?: string;
    isAdmin: boolean;
    isPremium: boolean;
    id?: number;

    constructor(input) {
        Object.assign(input);
    }
}
