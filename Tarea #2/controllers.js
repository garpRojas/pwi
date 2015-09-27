angular.module('bootstrap.controllers', [])

.controller('HomeController', ['$scope', function($scope){
    
    $scope.title = "Hola Mundo";
    
    var ref = new Firebase("https://tarea2garp.firebaseIO.com/products");

    ref.on("child_added", function(snapshot) {
        var nameProduct = snapshot.name;
        var priceProduct = snapshot.price;
        
        console.log(snapshot.name);
        console.log(priceProduct);
    });
    
    /*$scope.promotions = ref;
    $scope.promotions = [    
        {name:'Coca Cola', price:'$2'},
        {name:'Pepsi', price:'$3'},
        {name:'Redbull', price:'$4'}
    ];
    console.log(" "+$scope.promotions.length);*/
    
    
    
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

.controller('ProductsController', [function(){

}]);