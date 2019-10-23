
/**
 * Configuracion de las rutas de la App
 * @see components/menu/
 */
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })    
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/frutas',{
        templateUrl: 'parciales/frutas.html'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/filtermapreduce',{
      templateUrl: 'parciales/filtermapreduce.html'
    })
    .when('/programa_funcional',{
      templateUrl: 'parciales/programa-funcional.html'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    }) 
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/crud',{
      templateUrl: 'parciales/crud.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller: 'detalleController'
    })
    .otherwise({
      redirectTo: '/'
    })

})
