import { Component, OnInit } from "@angular/core";
import { Restaurant } from "../restaurant.interface";
import { RestaurantService } from "../restaurant.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  public restaurants: Array<Restaurant> = [];

  constructor(private _restaurantService: RestaurantService) {
    this.restaurants = this._restaurantService.restaurants;
  }

  public cambiarEstado(i: number) {
    if (this.restaurants[i].estado === "Abierto") {
      this.restaurants[i].estado = "Cerrado";
    } else {
      this.restaurants[i].estado = "Abierto";
    }
  }

  public eliminarRest(i: number) {
    this.restaurants.splice(i, 1);
    alert("Se ha eliminado el restaurante");
  }

  ngOnInit(): void {}
}
