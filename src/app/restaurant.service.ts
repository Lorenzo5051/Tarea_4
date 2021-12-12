import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.interface';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  public restaurants: Array<Restaurant> = [];

  constructor() { }
}
