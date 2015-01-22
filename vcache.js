var vCB = angular.module('vCacheBrowser', [])
  .controller('vCacheBrowserCtrl', ['$scope', function($scope) {
  
  	// Define default values and data
  	$scope.stockRefInput = "ARNFC-U-7276";
  	$scope.registrationInput = "YT61BXJ";
  	$scope.currentImage = "f";
	$scope.imageSources = { variants: ['f', 'r', 'i', '4', '5', '6'] };

  	// Encode a stock reference & registration and set stockIdentifier
    $scope.encodeInput = function() {
    
		// Reset and prepare array / variables
		$scope.stockRefInput = $scope.stockRefInput.replace(/\s+/g, '').toUpperCase();
		$scope.registrationInput = $scope.registrationInput.replace(/\s+/g, '').toUpperCase();
	
		var stockRef = ($scope.stockRefInput.length < 9 ? "XXXXX-XXXX" : $scope.stockRefInput).split("");
		var regReverse = $scope.registrationInput.split("").reverse();
		var pointer = 0;
		$scope.stockIdentifier = "";

		// Loop through the reversed registration and place characters from stockRef
		angular.forEach(regReverse, function(value) {
			$scope.stockIdentifier = ($scope.stockIdentifier+stockRef[pointer]+value);
			pointer++;
		}, regReverse);

		// Append the 9th character
		$scope.stockIdentifier = ($scope.stockIdentifier+stockRef[8]);
    };
    
    $scope.bigPicture = function(variantID) {
		$scope.currentImage = variantID;
    };
    
    $scope.encodeInput();
}]);
  
  