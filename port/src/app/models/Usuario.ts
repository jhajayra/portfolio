export class Usuario {

    id?:number;
	nombreCompleto:string;
	titulo:string;
	descripcion:string;

    constructor (nombreCompleto: string, titulo: string, descripcion: string){
        this.nombreCompleto = nombreCompleto;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

}