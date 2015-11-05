angular.module('bootstrap.controllers', [])

.controller('HomeController', ['$scope', function($scope){
    
    $scope.title = "Caraga de los Datos";
    
    var ref = new Firebase("https://tarea2garp.firebaseio.com/products");  
    /*var fb = $firebase(ref);*/
   
    
    
    
    
   /* ref.on("value", function (snapshot) {
      var changedPost = snapshot.val();
      console.log("The updated post title is " + changedPost);
  });*/

   /* $scope.promotions = [    
        {name:'Coca Cola', price:'$2'},
        {name:'Pepsi', price:'$3'},
        {name:'Redbull', price:'$4'}
    ];*/
    
    $scope.add = function(){
        
        var newpromotion = angular.copy($scope.newpromotion);
        $scope.promotions.push(newpromotion);
        
        var usersRef = ref.child("products").set({
          name: "cocacola",
          price: "$20"
        });
    };
}])

.controller('ProductsController', [function(){

}]);