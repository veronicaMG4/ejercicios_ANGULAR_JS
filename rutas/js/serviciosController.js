app.controller('serviciosController', ['$scope', '$http', 'miServicioConstante','$log','rectangulo',
function($scope, $http,miServicioConstante,$log,rectangulo){


  console.trace('service controller');
$scope.tipos="Hay 5 tipos";

//servicios constante
$scope.valor=miServicioConstante;  

$log.info('serviceController con $log');    

$scope.titulo = "Servicios"; //+ servicioConstantes.titulo ;


//servicios service rectangulo
/*funciona
rectangulo.setAncho(3);
rectangulo.setAlto(6);

$scope.ancho=rectangulo.ancho
$scope.alto=rectangulo.alto
$scope.area=rectangulo.getArea();
fin funciona*/ 

//servicios service cuadrado
$scope.area2=Cuadrado.getArea();
}]);