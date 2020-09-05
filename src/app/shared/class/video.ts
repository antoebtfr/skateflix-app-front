export class Video {
    id?: number;
    videoname: string;
    link: string;
    category: string;
    userId: number;

    constructor(input?) {
        Object.assign(input);
    }
}
