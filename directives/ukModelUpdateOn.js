angular.module('UKhan').directive('ukModelUpdateOn',[function(){
	return{
		require: 'ngModel',
		restrict: 'A',
		priority: 1000,
		link: function($scope, iElm, iAttrs, ngModelCtrl){
			iElm.unbind('input').unbind('keydown').unbind('change');
			if(angular.isDefined(iAttrs.blur)){
				iElm.bind('blur', function() {
	                $scope.$apply(function() {
	                    ngModelCtrl.$setViewValue(iElm.val());
	                });         
	            });	
			}

            if(angular.isDefined(iAttrs.enter)){
	            iElm.bind('keypress', function(event) {
	            	if(event.charCode === 13){
		                $scope.$apply(function() {
		                    ngModelCtrl.$setViewValue(iElm.val());
		                });         
				    }
	            });	
            }

            if(angular.isDefined(iAttrs.submit)){
            	$scope.$on(iAttrs.submit, function(){
            		$scope.$apply(function(){
            			ngModelCtrl.$setViewValue(iElm.val());	
            		})
            	});
            }
            
		}
	}
}]);