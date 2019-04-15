/* tslint:disable */
import { Registration } from './registration';
export interface Player {
  id?: number;
  authdata?: string;
  email?: string;
  firstName?: string;
  gender?: 'MALE' | 'FEMALE';
  club?: string;
  name?: string;
  password?: string;
  registrationsPlayer1?: Array<Registration>;
  registrationsPlayer2?: Array<Registration>;
  role?: string;
}
