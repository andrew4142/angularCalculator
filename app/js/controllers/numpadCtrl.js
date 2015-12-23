var CalculatorApp = angular.module('CalculatorApp', []);
CalculatorApp.controller("numpadController", function ($scope) {
    //default values
    $scope.digits = [1,2,3,4,5,6,7,8,9,0,'.'];
    $scope.operations = [
		{
			name: '+',
			func: 'Add'
		},
		{
			name: '-',
			func: 'Minus'
		},
		{
			name: '/',
			func: 'Divide'
		},
		{
			name: '*',
			func: 'Multiply'
		}
	];
			
    $scope.operationResult = 0;
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
		$scope.firstNumber = parseFloat($scope.operationResult);
		$scope.newNumber = true;
    };
    
    $scope.getResult = function (){
		if($scope.operationResult && $scope.operation && $scope.firstNumber){
			var secondNumber  = $scope.operationResult;

			switch($scope.operation) {
			case "Add":
				$scope.operationResult = $scope.firstNumber + parseFloat(secondNumber);
				break;
			case "Minus":
				$scope.operationResult = $scope.firstNumber - parseFloat(secondNumber);
				break;
			case "Multiply":
				$scope.operationResult = $scope.firstNumber * parseFloat(secondNumber);
				break;
			case "Divide":
				$scope.operationResult = $scope.firstNumber / parseFloat(secondNumber);
				break;
			}
		}
    };
	
	$scope.clearResults = function (){
		$scope.operationResult = 0;
		$scope.newNumber = true;
		$scope.firstNumber = 0;
		$scope.operation = false;
	}
	
 
});
//TODO Create 2 controllers - 1 for view and 2 for numpad and factory(or service) to connect controllers




