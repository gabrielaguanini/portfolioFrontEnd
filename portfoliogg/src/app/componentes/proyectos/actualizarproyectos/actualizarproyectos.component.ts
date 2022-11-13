import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-actualizarproyectos',
  templateUrl: './actualizarproyectos.component.html',
  styleUrls: ['./actualizarproyectos.component.css']
})
export class ActualizarproyectosComponent implements OnInit {
  proyectos!: Proyectos;

  constructor(private proyServ: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyServ.detail(id).subscribe(data => {
      this.proyectos = data;
    }, err => {
      alert("No se modificó");
      this.router.navigate(['/paginauno']);
    })
  }

  onUpdate(): void {

    const id = this.activatedRouter.snapshot.params['id'];

    this.proyServ.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['/paginauno']);
      },
      err => {
        alert("No se pudo editar el proyecto");
        this.router.navigate(['/paginauno']);
      }
    )
  }
}   
