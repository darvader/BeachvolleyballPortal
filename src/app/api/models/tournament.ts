/* tslint:disable */
export interface Tournament {
  category?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
  contact?: string;
  date?: string;
  description?: string;
  entryFee?: number;
  gender?: 'MEN' | 'WOMEN' | 'MIXED';
  id?: number;
  name?: string;
  playMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
  priceMoney?: number;
}
