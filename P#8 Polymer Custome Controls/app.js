angular.module('CustomPolymer', ['ngRoute', 'CustomPolymer.controllers'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider

	.when('/', {
	    templateUrl: 'views/home.html',
        controller: 'HomeController'
	})
	.when('/simpleelements', {
	    templateUrl: 'views/simpleelements.html'
	})
	.otherwise({
	  	redirectTo: '/'
	});
}]);