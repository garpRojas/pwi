angular.module('bootstrap', [])

.controller('HomeController', ['$scope', function($scope){
    
    $scope.title = "Hola Mundo";
    
   var ref = new Firebase("https://tarea2garp.firebaseIO.com/products");
    
        ref.on("value", function (snapshot) {
          console.log(snapshot.val());

        $scope.products = [    
            {name:'Coca Cola', price:'$2'},
            {name:'Pepsi', price:'$3'},
            {name:'Redbull', price:'$4'}
        ];
    };
    console.log(" "+$scope.promotions.length);
    
    
    
    $scope.add = function(){
        
        var newpromotion = angular.copy($scope.newpromotion);
        /*$scope.promotions.push(newpromotion);*/
        
        var idProducto = "00"+usersRef.length();
        usersRef.set({
            idProducto: {
                name: newpromotion.name,
                price: newpromotion.price
            }
        });
    };
}])
