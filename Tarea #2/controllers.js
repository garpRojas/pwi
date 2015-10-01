angular.module('bootstrap.controllers', [])

.controller('HomeController', ['$scope', function($scope){
    
    var ref = new Firebase("https://tarea2garp.firebaseio.com/#-Jzmtt2j2qkOSR8RTh0H|dcb1882fdb9e2231e0c828d77d8b6a34/products");  
    /*var fb = $firebase(ref);*/
    
    $scope.title = "Hola Mundo";
    
/*    $scope.promotions = [ref];*/

    
   /* $scope.title = "Hola Mundo";
    $scope.promotions = [    
        {name:'Coca Cola', price:'$2'},
        {name:'Pepsi', price:'$3'},
        {name:'Redbull', price:'$4'}
    ];
    console.log(" "+$scope.promotions.length);*/
    $scope.add = function(){
        
        var newpromotion = angular.copy($scope.newpromotion);
        $scope.promotions.push(newpromotion);
    };
}])

.controller('ProductsController', [function(){

}]);