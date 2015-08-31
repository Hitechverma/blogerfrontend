'use strict';

blogApp.controller('HomeController',function($scope, $http) {
	$http.get(API_URL + "posts/").
	success(function(data, status, headers, config){
		$scope.t_posts = data;
		console.log($scope.t_posts, "hiiii buddy")
		angular.forEach($scope.t_posts,function(posts){
			$scope.post = posts.post
			$scope.username = posts.username
			$scope.createdAt = posts.created_at

			console.log('this is a post', $scope.post);
			console.log('this is that user', $scope.username);
			console.log('this was the time\n', $scope.createdAt);

		})
	})
})