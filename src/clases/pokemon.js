export class Pokemon{
    nombre;
    id;
    imagenPokemon;
    

    constructor(nombre,id,imagenPokemon){
        this.nombre=nombre;
        this.id=id;
        this.imagenPokemon=imagenPokemon;
    }


    getnombre() {
        return this.nombre;
    }
    setnombre(value) {
        this.nombre = value;
    }

    getid() {
        return this.id;
    }
    setid(value) {
        this.id = value;
    }

    getimagenPokemon() {
        return this.imagenPokemon;
    }
    setimagenPokemon(value) {
        this.imagenPokemon = value;
    }
}