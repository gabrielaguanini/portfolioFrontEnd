import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { Proyectos } from 'src/app/model/proyectos';
import { EducacionService } from 'src/app/service/educacion.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editareducacion',
  templateUrl: './editareducacion.component.html',
  styleUrls: ['./editareducacion.component.css']
})
export class EditareducacionComponent implements OnInit {

  educacion!: Educacion;

  constructor( private activatedRouter: ActivatedRoute,
               private router: Router,
               private eduServ:EducacionService ) { }

  ngOnInit(): void {
    
   
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduServ.actualizarPorId(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert("No se modificó");
      this.router.navigate(['/paginauno']);
    });
    
    

  }


  onUpdate(): void {

    const id = this.activatedRouter.snapshot.params['id'];

    this.eduServ.editarEducacion(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['/paginauno']);
      },
      err => {
        alert("No se pudo editar la educacion");
        this.router.navigate(['/paginauno']);
      }
    )
  }

}
