export class Educacion {

    idEdu?:number;
    tituloEdu:string;
    lugarEdu:string;
    anioEdu:number;
    urlEdu: string;

    constructor (tituloEdu: string, lugarEdu: string, anioEdu: number, urlEdu : string){
        this.tituloEdu = tituloEdu;
        this.lugarEdu = lugarEdu;
        this.anioEdu = anioEdu;
        this.urlEdu = urlEdu;

    }
}