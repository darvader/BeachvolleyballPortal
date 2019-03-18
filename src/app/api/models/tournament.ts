/* tslint:disable */
import { Registration } from './registration';
export interface Tournament {
  gender?: 'MEN' | 'WOMEN' | 'MIXED';
  category?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
  date?: string;
  description?: string;
  entryFee?: number;
  contact?: string;
  id?: number;
  name?: string;
  playMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
  priceMoney?: number;
  registrations?: Array<Registration>;
}
