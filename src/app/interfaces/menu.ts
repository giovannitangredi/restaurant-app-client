import { Restaurant } from "./restaurant";

export interface Menu {
    id: string,
    name: string,
    description: string,
    price : number,
    ingredients: string[],
    allergies: string[],
    restaurant: Restaurant;
}
