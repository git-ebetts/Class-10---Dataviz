graphApp.controller("graphControllers", function($scope, $firebaseArray, FIREBASE_URL ){

  var ref = new Firebase(FIREBASE_URL +'/data');

  $scope.graphData = $firebaseArray(ref);

  $scope.width = 600;
  $scope.height = 250;

  $scope.yAxis = "Booty Haul";
  $scope.xAxis = "2015";

  $scope.max = 342;

});

  






















