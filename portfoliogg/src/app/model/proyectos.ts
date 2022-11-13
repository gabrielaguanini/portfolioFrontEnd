export class Proyectos {

  id?:number;
  nombreProyecto: string;
  descripcionProyecto: string;

  constructor(nombreProyecto:string, descripcionProyecto:string){
    this.nombreProyecto = nombreProyecto;
    this.descripcionProyecto = descripcionProyecto;
  }
}
