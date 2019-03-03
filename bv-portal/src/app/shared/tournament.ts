export interface Tournament {
	name: string;
	date: Date;
	category: string;
	description: string;
	playMode: string; // double-out, group play and single out
	gender: string; // men, women, mixed
	entryFee: number;
	priceMoney: number;
	contact: string;
	location: string;
}