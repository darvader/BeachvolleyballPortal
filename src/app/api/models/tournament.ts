/* tslint:disable */
export interface Tournament {
  category?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
  contact?: string;
  date?: string;
  description?: string;
  entryFee?: number;
  id?: number;
  name?: string;
  playMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
  priceMoney?: number;
  type?: 'MEN' | 'WOMEN' | 'MIXED';
}
