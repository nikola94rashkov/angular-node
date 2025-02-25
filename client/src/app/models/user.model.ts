export type User = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  role: number;
  date: Date;
};

export type UserCredentials = Pick<User, 'email' | 'password'>;
