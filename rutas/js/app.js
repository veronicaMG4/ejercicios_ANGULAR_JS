var app = angular.module('angularApp', ['ngRoute']);

/**CONSTANTES https://www.cursoangularjs.es/doku.php?id=unidades:03_servicios:05_constant*/

app.constant("miServicioConstante", "Hola mundo");
app.constant("servicioConstantes", {
  "titulo": "AngularApp",
  "idioma": "es-Es",
  "version": "1.0",
  "autor": "Veronica Mendez",
  "github": "https://github.com/anderuraga/AngularJSEjercicios"
});



/**PROVIDERS  es como el dao*/

app.service("cancionProvider", CancionProvider);





/**EJEMPLO SERVICIO https://www.cursoangularjs.es */
//Clase rectangulo
function Rectangulo() {
  this.ancho = 0;
  this.alto = 0;

  this.setAncho = function (ancho) {
    this.ancho = ancho;
  }

  this.setAlto = function (alto) {
    this.alto = alto;
  }

  this.getArea = function () {
    return this.ancho * this.alto;
  }
}
//definir servicio
app.service("rectangulo", Rectangulo);


//Clase Rectagulo2 con valores dados iniciados
app.value("tamanyoInicialRectangulo2", {
  ancho: 2,
  alto: 3
});

function Rectangulo2(tamanyoInicial) {
  this.ancho = tamanyoInicial.ancho;
  this.alto = tamanyoInicial.alto;

  this.setAncho = function (ancho) {
    this.ancho = ancho;
  }

  this.setAlto = function (alto) {
    this.alto = alto;
  }

  this.getArea = function () {
    return this.ancho * this.alto;
  }
}

app.service("rectangulo", ['tamanyoInicialRectangulo', Rectangulo]);


app.controller("PruebaController", ["$scope", "rectangulo", function ($scope, rectangulo) {
  $scope.area = rectangulo.getArea();
}]);



/**CONTROLADOR PRINCIPAL */

/*capitalizar una la primera letra de un string*/



//definir filtro en app
//1.capitalizar

app.filter("capitalizar", function () {
  return function (cadena) {
    if (cadena != undefined && typeof cadena == 'string') { //!=undefined es igual a null

      return cadena.charAt(0).toUpperCase() + cadena.slice(1)

    } else {
      return "";
    }

  }
});

//2.hoy es VIErnes
app.filter("capitalizarEntreMedias", function () {
  return function (cadena, nInicial, nFinal) {
    if (cadena != undefined && typeof cadena == 'string') { //!=undefined es igual a null

      return cadena.slice(0, nInicial) + cadena.slice(nInicial, nFinal).toUpperCase() + cadena.slice(Final)

    } else {
      return "";
    }
  }
});

//3.hoy es viernes Arkaitz

app.filter("capitalizarEntreMedias2", function () {
  return function (cadena, nInicial, nFinal) {
    if (cadena != undefined && typeof cadena == 'string') {
      if (nInicial == undefined) {
        nInicial = 0;
        if (nFinal == undefined) {
          nFinal = 1;
        }
      }
      return cadena.slice(0, nInicial) + cadena.slice(nInicial, nFinal).toUpperCase() + cadena.slice(nFinal);
    } else {
      return "";
    }
  }
});

//4. capitalizar todas las palabras de una oracion
app.filter('capitalizePalabras', function () {
  return function (input, scope) {
    if (input != null) {
      input = input.toLowerCase().split(' ');//coge la oracion la pasa a minusculas y donde encuentre espacio parte para separar la oracion por espacios
    }
    for (var i = 0; i < input.length; i++) { // You do not need to check if i is larger than input length, as your for does that for you 
      // Assign it back to the array 
      input[i] = input[i].charAt(0).toUpperCase() + input[i].substring(1);
    } // Directly return the joined string 
    return input.join(' ');
    //coge el 
  }
});