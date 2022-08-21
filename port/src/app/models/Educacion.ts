export class Educacion {

    id?:number;
    tituloEdu:string;
    lugarEdu:string;
    anioEdu:string;

    constructor (tituloEdu: string, lugarEdu: string, anioEdu: string){
        this.tituloEdu = tituloEdu;
        this.lugarEdu = lugarEdu;
        this.anioEdu = anioEdu;

    }
}