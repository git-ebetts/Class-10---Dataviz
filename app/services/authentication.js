graphApp.factory('Authentication', 
	function($firebase, 
		$firebaseAuth, 
		$routeParams, 
		$location, 
		FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

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
						password: user.password
					});

					//console.log(postRef);


				});
			}
		} // myObject



		return myObject;
	}); //factory












