import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonaRegistroComponent } from './ayudas/persona-registro/persona-registro.component';
import {PersonaConsultaComponent } from './ayudas/person-consulta/person-consulta.component';
import {Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'personConsulta',
    component: PersonaConsultaComponent
  },

  {
    path: 'personaRegistro',
    component: PersonaRegistroComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
