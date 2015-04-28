graphApp.factory('Authentication', 
	function($firebase, 
		$firebaseAuth, 
		$rootScope,
		$routeParams, 
		$location, 
		FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);


auth.$onAuth(function(authData) {
  if (authData) {
    console.log("Logged in as:", authData.uid);
  } else {
    console.log("Logged out");
  }
});
		//auth.$onAuth(function(authData) {
			//if (authData) {
			//	var ref = new Firebase(FIREBASE_URL + '/users/' + authData.uid);
			//	var user = $firebase(ref).$asObject();
			//	$rootScope.currentUser = user;
			//} else {
			//	$rootScope.currentUser = '';
		//	}

			//});
	

		var myObject = {
			login: function(user) {
				return auth.$authWithPassword({
					email: user.email,
					password: user.password
				}); // authwithpassword
			}, // login
			register: function(user) {
				return auth.$createUser({
				email: user.email,
				password: user.password	
				}).then(function(authData){
					var ref = new Firebase(FIREBASE_URL);
					var postRef = ref.child('users').child(authData.uid);
					postRef.set({
						date: Firebase.ServerValue.TIMESTAMP,
						firstname: user.firstname,
						lastname: user.lastname,
						email: user.email,
					});

					//console.log(postRef);


				});
			}
		} // myObject



		return myObject;
	}); //factory











