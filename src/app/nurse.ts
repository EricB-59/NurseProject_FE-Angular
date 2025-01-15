export class Nurse {
  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(
    _first_name: string,
    _last_name: string,
    _email: string,
    _password: string
  ) {
    this.first_name = _first_name;
    this.last_name = _last_name;
    this.email = _email;
    this.password = _password;
  }
}
