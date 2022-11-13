export class Educacion {

    id?:number;
    nombreEducacion!:string;
    fechaEducacion!:string;
    descripcionEducacion!:string;

    constructor(nombreEducacion:string, fechaEducacion:string,  descripcionEducacion:string){

    this.nombreEducacion=nombreEducacion;
    this.fechaEducacion=fechaEducacion;
    this.descripcionEducacion=descripcionEducacion;
}
}
