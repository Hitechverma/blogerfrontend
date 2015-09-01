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

			/*console.log('this is a post', $scope.post);
			console.log('this is that user', $scope.username);
			console.log('this was the time\n', $scope.createdAt);*/

		})
	});
	$scope.do_post = function(){
		$scope.post_data = document.getElementById('post').value;
		$scope.username_data = document.getElementById('user').value;
		
		//for ajax request
		/*var fd = new FormData()
		fd.append('username',username_data)
		fd.append('post',post_data)
	}*/

		/*var request = http({
				method: "POST"
				url: API_URL + "posts/"
				data: {
					'username' : username_data
					'post': post_data
				}
		});*/
		var dataObj = {
					username : $scope.username_data,
					post: $scope.post_data
				};
		var req = $http.post(
			API_URL + "posts/",dataObj);
		req.success(function(data, status, headers, config){
			console.log(data);
			// console.log("chakk De phatter");
		});
}

})