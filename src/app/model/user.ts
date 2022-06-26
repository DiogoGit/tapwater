export class User {
  id!: string;

  username: string;
  password: string;

  name?: string;
  cellPhone?: string;

  constructor(username: string, password: string) {
    this.id = String(Math.round(Math.random() * 1000));
    this.username = username;
    this.password = password;
  }

}
