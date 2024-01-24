export class CartaPokemon{
    vida;
    fechaSalida;   
    imagen;   
    tipo; 
    subtipo;   
    ataques;   
    habilidad;    
    artista;
    

    constructor(vida,fechaSalida,imagen,tipo,subtipo,ataques,habilidad,artista){
        this.vida=vida;
        this.fechaSalida=fechaSalida
        this.imagen=imagen
        this.tipo=tipo
        this.subtipo=subtipo
        this.ataques=ataques
        this.habilidad=habilidad
        this.artista=artista
    }
    getvida() {
        return this.vida;
    }
    setvida(value) {
        this.vida = value;
    }

    getFechaSalida() {
        return this.fechaSalida;
    }
    setFechaSalida(value) {
        this.fechaSalida = value;
    }
    getImagen() {
        return this.imagen;
    }
    setImagen(value) {
        this.imagen = value;
    }

    getTipo() {
        return this.tipo;
    }
    setTipo(value) {
        this.tipo = value;
    }
    getSubtipo() {
        return this.subtipo;
    }
    setSubtipo(value) {
        this.subtipo = value;
    }
    getAtaques() {
        return this.ataques;
    }
    setAtaques(value) {
        this.ataques = value;
    }

    getHabilidad() {
        return this.habilidad;
    }
    setHabilidad(value) {
        this.habilidad = value;
    }

    getArtista() {
        return this.artista;
    }
    setArtista(value) {
        this.artista = value;
    }

}