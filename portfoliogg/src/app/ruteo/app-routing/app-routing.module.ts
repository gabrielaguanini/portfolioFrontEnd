import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from 'src/app/componentes/bienvenida/bienvenida.component';
import { EditarexplabComponent } from 'src/app/componentes/editarexplab/editarexplab.component';
import { EditarlibvisComponent } from 'src/app/componentes/editarlibvis/editarlibvis.component';
import { EditareducacionComponent } from 'src/app/componentes/educacion/editareducacion/editareducacion.component';
import { NuevaeducacionComponent } from 'src/app/componentes/educacion/nuevaeducacion/nuevaeducacion.component';
import { EditarhabilidadComponent } from 'src/app/componentes/habilidadescrud/editarhabilidad/editarhabilidad.component';
import { HabilidadescrudComponent } from 'src/app/componentes/habilidadescrud/habilidadescrud.component';
import { NuevahabilidadComponent } from 'src/app/componentes/habilidadescrud/nuevahabilidad/nuevahabilidad.component';
import { IniciarSesionComponent } from 'src/app/componentes/iniciar-sesion/iniciar-sesion.component';
import { LibrovisitasComponent } from 'src/app/componentes/librovisitas/librovisitas.component';
import { MsjlibvisComponent } from 'src/app/componentes/msjlibvis/msjlibvis.component';
import { PaginadosComponent } from 'src/app/componentes/paginados/paginados.component';
import { PaginaunoComponent } from 'src/app/componentes/paginauno/paginauno.component';
import { ActualizarproyectosComponent } from 'src/app/componentes/proyectos/actualizarproyectos/actualizarproyectos.component';
import { NuevoproyectoComponent } from 'src/app/componentes/proyectos/nuevoproyecto/nuevoproyecto.component';
import { ProyectosComponent } from 'src/app/componentes/proyectos/proyectos.component';
import { RegistroUsuarioComponent } from 'src/app/componentes/registro-usuario/registro-usuario.component';
import { TrabcrearComponent } from 'src/app/componentes/trabcrear/trabcrear.component';
import { GuardGuard } from 'src/app/service/guard.guard';


const routes: Routes = [

  { path: 'bienvenida', component: BienvenidaComponent }, 
  { path: 'paginauno', component: PaginaunoComponent, canActivate:[GuardGuard]},
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'paginados', component: PaginadosComponent, canActivate:[GuardGuard] },
  { path: 'librovisitas', component: LibrovisitasComponent, canActivate:[GuardGuard] },
  { path: 'editarlib/:id', component: EditarlibvisComponent, canActivate:[GuardGuard] },
  { path: 'editarexplab/:id', component:EditarexplabComponent, canActivate:[GuardGuard] },
  { path: 'trabcrear', component: TrabcrearComponent, canActivate:[GuardGuard] }, 
  { path: 'nuevousuario', component: RegistroUsuarioComponent }, 
  { path: 'nuevoproyecto', component: NuevoproyectoComponent }, 
  { path: 'actualizarproyecto/:id', component: ActualizarproyectosComponent}, 
  { path: 'nuevaeducacion', component: NuevaeducacionComponent }, 
  { path: 'actualizareducacion/:id', component: EditareducacionComponent}, 
  { path: 'nuevahabilidad', component: NuevahabilidadComponent}, 
  { path: 'actualizarhabilidad/:id', component: EditarhabilidadComponent}, 
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }