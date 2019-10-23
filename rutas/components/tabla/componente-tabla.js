angular.
  module('angularApp').  // nombre App
  component('componenteTabla', {   
    templateUrl: './components/tabla/template.tabla.html',
    controller: function TablaController($http) {

      console.trace('TablaController');  
    
      $self=this;
      $self.frutas=[];
      $self.precio=[];//Map, Filter, Reduce
      $self.colores = [];
      $self.colores2=[];
     
      $self.nombre2e = [];
      $self.totalEuros = 0;
     

      let url = 'http://localhost:3000/frutas';
      $http.get(url).then(function (result) {
          console.trace('servicio rest funcionando %o', result);
          $self.frutas=result.data;
          $self.colores = result.data.map( e => e.color);
          $self.nombre2e = result.data.filter( e=>e.precio > 1).map( e=> {
             return {"nombre": e.nombre, "precio": e.precio }
            });
          $self.totalEuros = result.data.map(e=>e.precio).reduce( (pv,cv)=> pv+cv );
          $self.colores2= ['verde','verde','rojo'].filter( (v,i,a)=>{
            return a.indexOf(v)===i;
          });

      }).catch(function (response) {
          console.warn('servicio rest fallando %o', response);
          
      });
    }
  });