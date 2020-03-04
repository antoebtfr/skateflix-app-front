export class Link {
  name: string;
  redirectTo: string;

  constructor(input) {
    Object.assign(input);
  }
}
