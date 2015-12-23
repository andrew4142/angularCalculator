var myApp=angular.module('myApp', []);
myApp.controller("numpadController", function ($scope) {
    //default values
    $scope.operationResult = 0;
    $scope.digits = [1,2,3,4,5,6,7,8,9,0,'.']
    $scope.newNumber = true;
    $scope.firstNumber = 0;
    $scope.operation = false;
    
    $scope.digitClick = function (digit){
	if ($scope.newNumber){
	    $scope.operationResult = digit.toString();
	    $scope.newNumber = false;
	}
	else{
	    $scope.operationResult += digit.toString();
	}
	
    };
    
    $scope.operationClick = function (operation){
        $scope.operation = operation;
	$scope.firstNumber = $scope.operationResult*1;
	$scope.newNumber = true;
	
    };
    
    $scope.getResult = function (){
	if($scope.operationResult && $scope.operation && $scope.firstNumber){
	    var secondNumber  = $scope.operationResult;
	    
	    switch($scope.operation) {
		case "+":
			$scope.operationResult = $scope.firstNumber + parseFloat(secondNumber);
			break;
		case "-":
			$scope.operationResult = $scope.firstNumber - parseFloat(secondNumber);
			break;
		case "*":
			$scope.operationResult = $scope.firstNumber * parseFloat(secondNumber);
			break;
		case "/":
			$scope.operationResult = $scope.firstNumber / parseFloat(secondNumber);
			break;
	    }
	   // $scope.firstNumber = secondNumber;
	}
    };
 
})

