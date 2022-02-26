import { Curso } from "./curso";
import { Estudiante } from "./estudiante";
import { Profesor } from "./profesor";

export class Asignatura {
    id_asignatura!:number;
    nombre!:string;
    profesor!:Array<Profesor>;
    estudiantes!:Array<Estudiante>;
    curso!:Array<Curso>;
}
