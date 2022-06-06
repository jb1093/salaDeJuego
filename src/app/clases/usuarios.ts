export class Usuarios {
    nombre:string;
    clave:string;
    constructor(){
        this.nombre="";
        this.clave="";
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
}