import { Asignatura } from "./asignatura";

export interface Curso {
    id_curso:number;
    grado:number;
    salon:string;
    asignaturas:Array<Asignatura>;

}
