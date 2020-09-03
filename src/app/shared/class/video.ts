export class Video {
    id?: number;
    name: string;
    link: string;

    constructor(input?){
        Object.assign(input);
    }
}
