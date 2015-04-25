var graphApp = angular.module("graphApp",["ngRoute","appControllers","firebase"])
.constant('FIREBASE_URL', 'https://sizzling-torch-4979.firebaseio.com');

var appControllers = angular.module("appControllers", []);

graphApp.config(["$routeProvider", function($routeProvider) {

	$routeProvider.
	when("/graph", {
		templateUrl: "partials/graph.html",
		controller: "graphControllers"
	}).
	when("/login", {
		templateUrl: "partials/login.html",
		controller: "registration"
	}).
	when("/register", {
		templateUrl: "partials/register.html",
		controller: "registration"
	}).
	otherwise({
		redirectTo: "/login"
	});

}])


















