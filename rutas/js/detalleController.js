app.controller('detalleController', ['$scope', '$routeParams', '$http',
                                      function($scope, $routeParams, $http){

    
    $scope.name = $routeParams.id;

    console.trace('detalleController');    
    
    $scope.pokemons = [];
    $scope.titulo = "Detalle del Pokémon "+ $scope.name ;
    $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/" + $scope.name;
    
  //  $scope.listar = function(){
        console.trace('Mostrando pokemon');
        $http.get($scope.ENDPOINT)
            .then(function(response){   // success antiguo

                console.trace('peticion GET %s data=%o', $scope.ENDPOINT, response);
                $scope.pokemons = response.data;

            }, function(response){    // gestion del error

                console.warn('Tenemos un ERROR response: %o' , response);
                $scope.mensajeValidacion = "Error de conexión con WebService";

            });
  //  }
  $scope.mostrar = function(){

  }

}]);