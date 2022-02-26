import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../clases/asignatura';
import { Profesor } from '../clases/profesor';
import { ProfesorService } from '../service/profesor.service';

@Component({
  selector: 'app-profesor-datos',
  templateUrl: './profesor-datos.component.html',
  styleUrls: ['./profesor-datos.component.css']
})
export class ProfesorDatosComponent implements OnInit {

  titulo:string = "Datos de Profesor";
  profesor:Profesor = new Profesor(); 

  constructor(private profesorService : ProfesorService, private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.load();
  }  

  load():void{
    console.log(this.profesor)
    this.activatedRoute.params.subscribe(
      resultado=>{
        let id = resultado['id'];         
        if(id){
            this.profesorService.get(id).subscribe(                     
            es=>this.profesor=es                        
          );                 
        }
      }
    )
  }

}
