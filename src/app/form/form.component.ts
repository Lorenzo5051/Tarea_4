import { emitDistinctChangesOnlyDefaultValue } from "@angular/compiler/src/core";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Restaurant } from "../restaurant.interface";
import { RestaurantService } from "../restaurant.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  public restaurant: Restaurant = {
    name: "",
    stars: 0,
    address: "",
    estado: "Abierto"
  };

  public isMen: boolean = false;
  public isWomen: boolean = false;
  public isOther: boolean = false;

  public onSubmit() {
    const user: any = {
      gender: []
    };

    console.log(this.isMen);
    console.log(this.isWomen);
    console.log(this.isOther);

    if (this.isMen) {
      user.gender.push("Masculino");
    }
    if (this.isWomen) {
      user.gender.push("Femenino");
    }
    if (this.isOther) {
      user.gender.push("Otro");
    }

    if (this.isMen) {
      user.gender = "Hombre";
    } else if (this.isWomen) {
      user.gender = "Mujer";
    } else {
      user.gender = "Otro";
    }

    this.restaurant.dateCreated = new Date();
    console.log(this.restaurant);
    this._restaurantService.restaurants.push({ ...this.restaurant });
    console.log(this._restaurantService.restaurants);
    alert("El restaurante ha sido creado exitosamente");
  }

  constructor(private _restaurantService: RestaurantService) {}

  ngOnInit(): void {}
}
