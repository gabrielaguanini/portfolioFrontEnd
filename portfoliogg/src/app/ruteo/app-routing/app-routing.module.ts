import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from 'src/app/componentes/bienvenida/bienvenida.component';
import { EditarexplabComponent } from 'src/app/componentes/editarexplab/editarexplab.component';
import { EditarlibvisComponent } from 'src/app/componentes/editarlibvis/editarlibvis.component';
import { IniciarSesionComponent } from 'src/app/componentes/iniciar-sesion/iniciar-sesion.component';
import { LibrovisitasComponent } from 'src/app/componentes/librovisitas/librovisitas.component';
import { MsjlibvisComponent } from 'src/app/componentes/msjlibvis/msjlibvis.component';
import { PaginadosComponent } from 'src/app/componentes/paginados/paginados.component';
import { PaginaunoComponent } from 'src/app/componentes/paginauno/paginauno.component';
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
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }