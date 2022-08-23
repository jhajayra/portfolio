export class Experiencia {
    idExp?:number;
    cargoExp: string;
    anioExp: number;
    lugarExp: string

    constructor (cargoExp: string, anioExp: number, lugarExp: string) {
        this.cargoExp = cargoExp;
        this.anioExp = anioExp;
        this.lugarExp = lugarExp;
    }

}