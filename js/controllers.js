'use strict';

blogApp.controller('HomeController',function($scope, $http) {
	$http.get(API_URL + "posts/").
	success(function(data, status, headers, config){
		$scope.data = data;
		console.log($scope.data, "hiiii buddy")
	})
})