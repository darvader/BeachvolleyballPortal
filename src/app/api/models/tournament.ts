/* tslint:disable */
import { Registration } from './registration';
export interface Tournament {
  id?: number;
  category?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
  date?: string;
  description?: string;
  entryFee?: number;
  gender?: 'MEN' | 'WOMEN' | 'MIXED';
  contact?: string;
  name?: string;
  playMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
  priceMoney?: number;
  registrations?: Array<Registration>;
  type?: 'MEN' | 'WOMEN' | 'MIXED';
}
