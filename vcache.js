angular.module('vCacheBrowser', [])
  .controller('vCacheBrowserController', ['$scope', function($scope) {
  
  	// Define our defaults 
  	$scope.stockRefInput = "ARNFC-U-7276";
  	$scope.registrationInput = "YT61BXJ";
  	
  	// Encode a stock reference & registration and set stockIdentifier
    $scope.encodeInput = function() {
		// Reset and prepare array / variables
		var stockRef = $scope.stockRefInput.split("");
		var regReverse = $scope.registrationInput.split("").reverse();
		var pointer = 0;
		$scope.stockIdentifier = "";

		// Loop through the reversed registration and place characters from stockRef
		angular.forEach(regReverse, function(value) {
		$scope.stockIdentifier = ($scope.stockIdentifier+stockRef[pointer]+value);
		pointer++;
		}, regReverse);

		// Append the 9th character
		$scope.stockIdentifier = ($scope.stockIdentifier+stockRef[8]).toUpperCase();
    };
 
	$scope.fetchResults = function() {     
		 $scope.encodeInput(); 
		 console.log($scope.stockIdentifier);
      
    };
    
    $scope.fetchResults();
 
  }]);
  
  