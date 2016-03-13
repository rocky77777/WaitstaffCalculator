angular.module("myApp", [])
.controller("myCtrl", function($scope) {
	$scope.data = {
		tipTotal: 0,
		mealCount: 0,
		avgTipPerMeal: 0
	};
	var subT = 0;
	var tip = 0;
	var total = 0;
	var tipTotal = 0;
	var mealCount = 0;
	var avgTipPerMeal = 0;
	showCustomerChargesBox = false;
	showMyEarningsBox = false;
	$scope.submitted = false;
	$scope.computeSubtotal = function(mealPrice, tax) {
		subT = mealPrice + (mealPrice * (tax / 100));
		return subT;
	}
	$scope.computeTip = function(tipPerc) {
		tip = subT * (tipPerc / 100);
		return tip;
	}
	$scope.computeTotal = function () {
		total = subT + tip;
		return total;
	}
	$scope.submit = function() {
		$scope.submitted = true;
		if($scope.mealDetailsForm.$valid) {
			$scope.showCustomerChargesBox = true;
			$scope.showMyEarningsBox = true;
			$scope.data.tipTotal = $scope.data.tipTotal + tip;
			$scope.data.mealCount ++;
			$scope.submitted = false;
		}
	}
	$scope.cancel = function() {
		$scope.data.basePrice = "";
		$scope.data.taxRate = "";
		$scope.data.tipPercentage = "";
		$scope.showCustomerChargesBox = false;
	}
	$scope.reset = function() {
		$scope.data.tipTotal = 0;
		$scope.data.mealCount = 0;
		$scope.data.basePrice = "";
		$scope.data.taxRate = "";
		$scope.data.tipPercentage = ""; 
		$scope.showCustomerChargesBox = false;
		$scope.showMyEarningsBox = false;
	}
	$scope.computeAvgTip = function(totalTip, mealsCount) {
		return totalTip / mealsCount;
	}
});