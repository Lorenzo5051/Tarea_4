import { Component } from "@angular/core";
import { Autor } from "./user.interface";
import { Libro } from "./user.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public nombre: string = "";
  public apellido: string = "";
  public cedula: string = "";
  public nacimiento: Date = new Date();
  public genero: string = "";

  public lNombre: string = "";
  public lCreacion: number = 0;
  public lGenero: string = "";
  public lAutor: string = "";

  public autores: Array<Autor> = [];
  public libros: Array<Libro> = [];
  public librosAutor: Array<Libro> = [];

  public autorSelect: Autor = {
    nombre: "",
    apellido: "",
    cedula: "",
    nacimiento: new Date(),
    genero: ""
  };

  public registerNewAutor(): void {
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.cedula);
    console.log(this.nacimiento);
    console.log(this.genero);
    const autor: Autor = {
      nombre: this.nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      nacimiento: this.nacimiento,
      genero: this.genero
    };
    alert("Autor agregado exitosamente!");
    this.autores.push(autor);
    console.log(this.autores);
    this.nombre = "";
    this.apellido = "";
    this.cedula = "";
    this.nacimiento = new Date();
    this.genero = "";
  }

  public registerNewLibro(): void {
    console.log(this.lNombre);
    console.log(this.lCreacion);
    console.log(this.lGenero);
    console.log(this.lAutor);
    const libro: Libro = {
      lNombre: this.lNombre,
      lCreacion: this.lCreacion,
      lGenero: this.lGenero,
      lAutor: this.lAutor
    };
    alert("Libro agregado exitosamente!");
    this.libros.push(libro);
    console.log(this.libros);
    this.lNombre = "";
    this.lCreacion = 0;
    this.lGenero = "";
    this.lAutor = "";
  }

  public mostrarLibros(i: number) {
    this.autorSelect = this.autores[i];

    this.librosAutor = [];

    this.libros.forEach((libro) => {
      if (libro.lAutor === this.autorSelect.nombre) {
        this.librosAutor.push(libro);
      }
    });
    console.log(this.librosAutor);
  }
}
