angular.
  module('angularApp').  
  component('componenteFiltro', {   
    templateUrl: './components/filtro/template.filtro.html',
    controller: function FiltroController($scope,$http) {


      let url = 'http://localhost:3000/frutas';//direccion de donde saca los datos de frutas

      //FILTRO de colores

      $scope.colores2=[];
      $scope.colores2= ['verde','verde','rojo'].filter( (v,i,a)=>{
        return a.indexOf(v)===i;
      });

        //FILTRO de nombres
      $scope.nombres=[];
      $scope.nombres= ['luis','pedro','juan','luis','mateo','juan'].filter((value,index,array)=>{
        return array.indexOf(value)===index;
      });

      $totalEuros=0;



      //FILTRO FRUTAS POR COLORES CON BASES DE DATOS
      $scope.frutascolores = [];
      this.$onInit = function(){
        console.trace('FrutasController onInit'); 

      
        // CUIDADO llamada Asincrona !!!
        $http.get("../rutas/db.json").then(function (result) {
            console.trace('llamada correcta');           
            $scope.frutascolores = result.data.map( e => e.color).filter((value,index,array)=>{
              return array.indexOf(value)===index;
            });

        }).catch(function (response) {
            console.warn('ERROR llamda %o', result);
       });


    }; //onInit   
      

      //MAPEO CON BASES DE DATOS

      $scope.frutasnombre = [];

      
      $http.get(url).then(function (result) {
        $scope.frutasnombre = result.data.map( e => e.nombre);
    

      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          
      });


      
    /*****************************************************************************************************************/



      //MAPEO CON BASE DE DATOS JSON(extraemos datos
      $scope.colores = [];

      
      $http.get(url).then(function (result) {
        $scope.colores = result.data.map( e => e.color);
    

      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          
      });

    //MAPEO SIN JSON de un array(sin extraer datos)

    var officers = [
      { id: 20, name: 'Captain Piett' },
      { id: 24, name: 'General Veers' },
      { id: 56, name: 'Admiral Ozzel' },
      { id: 88, name: 'Commander Jerjerrod' }
    ];
    var officersIds = [];

 $scope.officersIds = officers.map( e => e.id);


    /*****************************************************************************************************************/
 
      //REDUCE de precios nose porque sale concatenados
  
      $http.get(url).then(function (result) {
        console.trace('servicio rest funcionando %o', result);
     
        $scope.totalEuros = result.data.map(e=>e.precio).reduce( (pv,cv)=> pv+cv );//previous value y currency value
 

        

    }).catch(function (response) {
        console.warn('servicio rest fallando %o', response);
        
    });


    }// controlador

  });