app.controller('pokemonController', ['$scope', '$routeParams', '$http',
function($scope, $routeParams, $http){


$scope.id = $routeParams.id;

console.trace('pokemonController');    

$scope.pokemons = [];
$scope.titulo = "Detalle Pokémon";
$scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon";

//  $scope.listar = function(){
console.trace('Listando pokemon');
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