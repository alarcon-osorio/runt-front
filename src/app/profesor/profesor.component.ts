import { Component, OnInit } from '@angular/core';
import { Profesor } from '../clases/profesor';
import { ProfesorService } from '../service/profesor.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  titulo:String = "Listado de Profesores";
  
  profesores:Array<Profesor> = [];

  constructor(private profesorService : ProfesorService) { }

  ngOnInit(): void {
    this.profesorService.getAll().then((data:Array<Profesor>)=>{
      if(data != null){
        this.profesores = data;
      }
    })
  }

}
