import { QrData } from "../components/interfaces/qrData";

export class Residuo {
    public id?: any;
    public nombreEmpresa: string = '';
    public material: string = '';
    public categoria: string = '';
    public fechaElaboracion: string = '';
    public fechaVencimiento: string = '';
    public idSucursal: string = '';
    public idEmpresa: string = '';
    public info?: QrData;

    constructor(){     
    }

    
}