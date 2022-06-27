import { getLocaleDateFormat } from "@angular/common";
export class Usuarios {
    nombre:string;
    clave:string;
    horario:any;
    constructor(){
        this.nombre="";
        this.clave="";
        this.horario=null;
    }

    guardar(){
        var listadousuario=[];
        if (localStorage.getItem("listado") === null)
        {
            //Creo e inicializo la matriz por unica vez
            listadousuario=[];
        }else{
             //Recupero el valor de lamatriz JSON
            listadousuario = JSON.parse(localStorage.getItem("listado") || "{}");
        }

        //Agrego un nuevo Registro a la matriz
        listadousuario.push(this);
        //Actualizo la matrizJSON en el localStorage
        localStorage.setItem('listado',JSON.stringify(listadousuario));
    }

    guardarUsuarioLogueado(){
        var usuarioLogueadoListado=[];
        if(localStorage.getItem("usuarioListado")===null){
            usuarioLogueadoListado=[];
        }else{
            usuarioLogueadoListado=JSON.parse(localStorage.getItem("usuarioListado") || "{}");
        }
        usuarioLogueadoListado.push(this);
        localStorage.setItem('usuarioListado',JSON.stringify(usuarioLogueadoListado));
    }
}