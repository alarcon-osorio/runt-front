import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profesor } from '../clases/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  url:string = environment.url;
  endPoint:string = "getDataProfesor";

  constructor(private http:HttpClient) { }

  //Obtener todos los profesores
  getAll():Promise<any>{
    return this.http.get(this.url + this.endPoint, {observe: "response"})
    .toPromise().then((response) =>{
      if(response.status == 200){
        if(response.body){
          console.table(response.body);
          return response.body;
        }       
      }
      return null;
    })
  }

  //Obtener un solo profesor
  get(id:number):Observable<Profesor>{  
    console.log(this.url + this.endPoint + "/" + id);
    return this.http.get<Profesor>(this.url + this.endPoint + "/" + id);    
  }

}
