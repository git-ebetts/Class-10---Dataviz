graphApp.controller("registration", 
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL,
		Authentication
		){



		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user){
				$location.path("/graph");
			}).catch(function(error){
				$scope.message = error.message;
			}); // login
		} // end function

	$scope.register = function() {
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user);
			$location.path("/graph");
		}).catch(function(error){
			$scope.message=error.message;
		});

	}; // register

});  






