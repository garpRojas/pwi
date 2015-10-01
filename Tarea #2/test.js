angular.module('bootstrap', [])

.controller('HomeController', ['$scope', function($scope){
    
    $scope.title = "Hola Mundo";
    
/*    var ref = new Firebase("https://tarea2garp.firebaseIO.com/products");
    
    var pt = $firebase(ref);
    
    var syncObject = pt.$asObject();
    
    syncObject.$bindTo($scope, 'products');*/

    /*ref.on("child_added", function(snapshot) {
        var nameProduct = snapshot.name;
        var priceProduct = snapshot.price;
        
        
        console.log(snapshot.val());
        console.log(snapshot.name);
        console.log(priceProduct);
    });
    */
    
    /*$scope.promotions = ref.on("child_added", function(snapshot) {}
    /*$scope.products = ref;*/
    $scope.products = [    
        {name:'Coca Cola', price:'$2'},
        {name:'Pepsi', price:'$3'},
        {name:'Redbull', price:'$4'}
    ];
    
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
