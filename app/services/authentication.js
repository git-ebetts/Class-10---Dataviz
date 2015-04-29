graphApp.factory('Authentication', 
	function($firebase, 
		$firebaseAuth, 
		$rootScope,
		$firebaseObject,
		$routeParams, 
		$location, 
		FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);


		auth.$onAuth(function(authData) {
			if (authData) {
				console.log("Logged in as:", authData.uid);
				var user = $firebaseObject(ref.child('users').child(authData.uid));
				$rootScope.currentUser = user;
			} else {
				console.log("Logged out");
				$rootScope.currentUser = null;
			}
		});

		var myObject = {
			login: function(user) {
				return auth.$authWithPassword({
					email: user.email,
					password: user.password
				}); // authwithpassword
			}, // login

			logout: function(user) {
				return auth.$unauth();
			},
			
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











