function CancionProvider($http){
    console.log('CancionProvider');
    const ENDPOINT="http://localhost:8080/cancion/";

    this.listar=function(){
        console.log('cancionProvider Listar'+ ENDPOINT);
        return $http.get(ENDPOINT);
    }

    this.detalle = function( idCancion ){    
        let url = ENDPOINT + idCancion;
        console.log('cancionProvider detalle ' + url);
    
      }



      this.eliminar = function( idCancion ){    
        let url = ENDPOINT + idCancion;
        console.log('cancionProvider eliminar ' + url);
        return $http.delete(url);//devuelve promesa
    
      }

  
        
     
      this.crear = function( nombreCancion ){    
        let url = ENDPOINT;
        console.log('cancionProvider nombreCancion ' + url);
        let body = { "id": 0, "nombre": nombreCancion };
        return $http.post(url, body);
        
      }// crear

     

      this.modificar = function( cancion ){  //idCancion, nombreCancion  
        let url = ENDPOINT  + cancion.id;//o idCancion
        console.log('cancionProvider modificar %s  %o ', url, cancion );//cancion=idCancion, nombreCancion 
        return $http.put( url, cancion);      
      }// modificar
    }
