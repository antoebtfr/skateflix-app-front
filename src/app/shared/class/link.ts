export class Link {
  name: string;
  redirectTo: string;
  activate?: () => any;

  constructor(input) {
    Object.assign(input);
  }
}
