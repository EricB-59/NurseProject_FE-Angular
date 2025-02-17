export class Nurse {
  id?: number;
  first_name?: string; // El ? indica que es opcional
  last_name?: string; // El ? indica que es opcional
  email: string;
  profileImg: string;
  password: string;

  constructor(
    // Definimos los parámetros del constructor con valores por defecto
    {
      id,
      first_name,
      last_name,
      email,
      profileImg,
      password,
    }: {
      id?: number;
      first_name?: string;
      last_name?: string;
      email: string;
      profileImg: string;
      password: string;
    }
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.profileImg = profileImg;
    this.password = password;
  }
}
