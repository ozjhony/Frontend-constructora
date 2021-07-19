
import { ProyectoModelo } from './proyecto.modelo';

export class ProyectoImgModelo {
    id?: String;
    path: String;
    order: number;
    product?: ProyectoModelo;
    productId?: String;
}