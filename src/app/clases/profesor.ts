import { Asignatura } from "./asignatura";

export class Profesor {
    id_profesor!:number;
    nombre!:string;
    asignaturas!:Array<Asignatura>;
}
