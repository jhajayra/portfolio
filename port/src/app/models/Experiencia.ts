export class Experiencia {
    idExp?:number;
    cargoExp: string;
    anioExp: string;
    lugarExp: string

    constructor (cargoExp: string, anioExp: string, lugarExp: string) {
        this.cargoExp = cargoExp;
        this.anioExp = anioExp;
        this.lugarExp = lugarExp;
    }

}