export class Entidades { //mensajes 
    fecha: Date;
    usuario: string; 
    texto: string;

    constructor(){
        this.fecha= new Date(); 
        this.usuario="";
        this.texto="probando 123 sin setear";

    }
}
