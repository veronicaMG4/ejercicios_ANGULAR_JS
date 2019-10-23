app.controller('mainCtrl', ['$scope','$http','servicioConstantes', function($scope,$http,servicioConstantes){

    $scope.menuSuperior = "parciales/menu.html";
    $scope.capitalizar="prueba capitalizacion";
    $scope.capitalizar2="hoy es viernes";
    $scope.capitalizar3="aqui lo que quiero es que me capitalice todas las palabras de una oracion";
  
    $scope.frutas = {};
    $scope.alerta={
        "texto":"Ongi etorri",
        "clase":"primary"
    };
  
    $scope.constantes = servicioConstantes;
  let url = 'http://localhost:3000/frutas';
  $http.get(url).then(function (result) {
      console.trace('servicio rest funcionando %o', result);
      $scope.frutas = result.data;
  
  
  }).catch(function (response) {
      console.warn('servicio rest fallando %o', response);
      
  });
   

  
  
  }]);
  
  