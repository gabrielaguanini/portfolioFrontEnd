import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-nuevahabilidad',
  templateUrl: './nuevahabilidad.component.html',
  styleUrls: ['./nuevahabilidad.component.css']
})
export class NuevahabilidadComponent implements OnInit {
  nombreHabilidad!: string;
  descripcionHabilidad!: string;

  constructor(private habServ:HabilidadesService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habilidades = new Habilidades(this.nombreHabilidad, this.descripcionHabilidad);
    this.habServ.save(habilidades).subscribe( data =>{ alert("Habilidad guardada");
    this.router.navigate(['/paginauno']);
  }, err =>{alert("No se creó la habilidad");
    this.router.navigate(["/paginauno"]);})
  }


}
