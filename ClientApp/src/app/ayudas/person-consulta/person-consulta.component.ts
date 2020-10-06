import { Component, OnInit } from '@angular/core';
import {Persona} from 'src/app/ayudas/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-person-consulta',
  templateUrl: './person-consulta.component.html',
  styleUrls: ['./person-consulta.component.css']
})
export class PersonaConsultaComponent implements OnInit {

  personas:Persona[];
  searchText:string;
  constructor(private service:PersonaService) { }

  ngOnInit(): void {
    this.get();
  }

  get(){
    this.personas = this.service.Consultar();
  }

}
