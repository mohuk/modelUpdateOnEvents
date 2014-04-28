angular.module('UKhan').directive('ukSubmit', ['$rootScope', function($rootScope){
	return function($scope, iElm, iAttrs){
		var submitFunc = $scope.$eval(iAttrs.onSubmit);
		var isSubmitFuncDefined = angular.isDefined(submitFunc) && angular.isFunction(submitFunc);
		var submitFuncArgs = $scope.$eval(iAttrs.args);
		iElm.bind('click', function(event){
			$rootScope.$broadcast(iAttrs.ukSubmit);
			if(isSubmitFuncDefined){
				$scope.$apply(function(){
					submitFunc.apply(this, submitFuncArgs); //convert array into function arguments	
				})
				
			}
		})
	}
}]);