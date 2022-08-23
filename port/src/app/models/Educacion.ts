export class Educacion {

    idEdu?:number;
    tituloEdu:string;
    lugarEdu:string;
    anioEdu:number;

    constructor (tituloEdu: string, lugarEdu: string, anioEdu: number){
        this.tituloEdu = tituloEdu;
        this.lugarEdu = lugarEdu;
        this.anioEdu = anioEdu;

    }
}