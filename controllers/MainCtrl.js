'use strict';
var app = angular.module('UKhan', []);

app.controller('MainCtrl',['$scope', function($scope){
	$scope.onSubmitForModel = function(argsOne, argsTwo){
		alert(argsOne + " " + argsTwo);
	}
}]);