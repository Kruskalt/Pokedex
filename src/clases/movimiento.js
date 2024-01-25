export class Movimiento{
    nombre;
    getnombre() {
        return this.nombre;
    }
    setnombre(value) {
        this.nombre = value;
    }
    cantidadDaño;
    getcantidadDaño() {
        return this.cantidadDaño;
    }
    setcantidadDaño(value) {
        this.cantidadDaño = value;
    }
    descripcion;
    getdescripcion() {
        return this.descripcion;
    }
    setdescripcion(value) {
        this.descripcion = value;
    }
    
    costoEnergia;
    getcostoEnergia() {
        return this.costoEnergia;
    }
    setcostoEnergia(value) {
        this.costoEnergia = value;
    }

    constructor(nombre,cantidadDaño,descripcion,costoEnergia){
        this.nombre=nombre;
        this.cantidadDaño=cantidadDaño;
        this.descripcion=descripcion;
        this.costoEnergia=costoEnergia;
    }


}