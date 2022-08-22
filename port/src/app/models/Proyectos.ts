export class Proyectos {
    id?:number;
    nombreProye:string;
    descriProye:string;
    anioProye:string;

    constructor (nombreProye: string, descriProye: string, anioProye: string){
        this.nombreProye = nombreProye;
        this.descriProye = descriProye;
        this.anioProye = anioProye;
    }

    

}