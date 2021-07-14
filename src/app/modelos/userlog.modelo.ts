import { UsuarioModule } from "../modulos/usuario/usuario.module";

export class UserLogModelo{
    id?: String;
    nombre_usuario?: String;
    clave?: String;
    telefono?: String;
    tipoUsuarioId?: String;
    user?: UsuarioModule;
    tk?: String;
    isLoggedIn: boolean = false;
}