app.controller('crudCtrl', ['$scope','$http', 'cancionProvider', function($scope,$http, cancionProvider){

   
    $scope.valor = "CRUD - Ejercicio";
    $scope.canciones=[];
    $scope.alerta={};
    $scope.mensaje = "";
    $scope.nombre = "";
    $scope.cancionEditar = {};
    $scope.canciones = [];

 

 // Eventos
 this.$onInit = function(){
    console.trace('crudController onInit'); 

    /*
    TODO ponerlo donde sea neceario
    cancionProvider.listar();
    cancionProvider.detalle(1);
    cancionProvider.eliminar(2);
    cancionProvider.crear("Mockito");
    cancionProvider.modificar(1,"Cambiada Cancion 1");
    */

    
    let promesa = cancionProvider.listar();           
    promesa.then( 
        response=>{
            console.debug('Llamada Rest OK %o', response);
            $scope.canciones = response.data;
           
        },
        response=>{
            console.warn('Llamada Rest ERROR %o', response);
           
        }
    );

   


};  //FIN FUNCION  $onInit 


// funciones

$scope.refrescar= function(){
    let promesa = cancionProvider.listar();           
    promesa.then( 
        response=>{
            console.debug('Llamada Rest OK %o', response);
            $scope.canciones = response.data;
           
        },
        response=>{
            console.warn('Llamada Rest ERROR %o', response);
           
        }
    );


}


$scope.nuevaCancion = ( nombre ) => {

    console.trace('click nuevaCancion nombre %s', nombre);
    //TODO validacion

    let p = cancionProvider.crear( nombre);
    p.then(
        (response)=>{
            console.debug('llamada correcta %o', response);
            $scope.refrescar();
            $scope.alerta={"texto":"Se ha insertado con existo",
                            "clase":"success"};
        },
        (response)=>{
            console.warn('llamada INcorrecta %o', response);
            $scope.alerta={"texto":"No se ha podido insertar el Registro",
                            "clase":"danger"};
        }
    );



}
//nuevaCancion



$scope.eliminar = (c) =>{
    console.trace('click eliminar %o', c);
    if ( confirm('¿Estas Seguro?') ){

        cancionProvider.eliminar(c.id).then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.refrescar();                   
                $scope.mensaje = "Canción Eliminada, sahionara baby";

            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje = "Lo sentimos no se pudo eliminar";
            }
        );
    }// confirm
}
//eliminar


$scope.editar = (c)=>{ $scope.cancionEditar = c };

$scope.guardar = () => {

    console.trace('click guardar %o', $scope.cancionEditar );

    let p = cancionProvider.modificar( $scope.cancionEditar );
    p.then(
        (response)=>{
            console.debug('llamada correcta %o', response);
            $scope.refrescar();
            $scope.nombre = "";
            $scope.mensaje = "Canción Modificada con éxito";

        },
        (response)=>{
            console.warn('llamada INcorrecta %o', response);
            $scope.mensaje = "Nombre de la canción ya existe";
        }
    );


}
//guardar

  }]);//CONTROLLER
  
  