export class Experiencia {
    idExp?:number;
    cargoExp: string;
    lugarExp: string;
    anioInicio: number;
    mesInicio: string;
    anioFin: number;
    mesFin: string;

    constructor (cargoExp: string, lugarExp: string, anioInicio: number,
                 mesInicio: string, anioFin: number, mesFin: string  ) {
        this.cargoExp = cargoExp;
        this.lugarExp = lugarExp;
        this.anioInicio = anioInicio;
        this.mesInicio = mesInicio;
        this.anioFin = anioFin;
        this.mesFin = mesFin;
    }

}