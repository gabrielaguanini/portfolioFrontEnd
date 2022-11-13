import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-editarhabilidad',
  templateUrl: './editarhabilidad.component.html',
  styleUrls: ['./editarhabilidad.component.css']
})
export class EditarhabilidadComponent implements OnInit {

  habilidades!: Habilidades;

  constructor(private activatedRouter: ActivatedRoute,
              private router: Router,
              private habServ:HabilidadesService) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    
    this.habServ.detail(id).subscribe(data => {
      this.habilidades = data;
    }, err => {
      alert("No se modificó");
      this.router.navigate(['/paginauno']);
    })
  }

  onUpdate(): void {

    const id = this.activatedRouter.snapshot.params['id'];

    this.habServ.update(id, this.habilidades).subscribe(
      data => {
        this.router.navigate(['/paginauno']);
      },
      err => {
        alert("No se pudo editar la habilidad");
        this.router.navigate(['/paginauno']);
      }
    )
  }

}
