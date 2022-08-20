export class Experiencia {
    id?:number;
    nombreExp: string;
    anioExp: string;
    lugarExp: string

    constructor (nombreExp: string, anioExp: string, lugarExp: string) {
        this.nombreExp = nombreExp;
        this.anioExp = anioExp;
        this.lugarExp = lugarExp;
    }

}