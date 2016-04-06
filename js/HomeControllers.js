blogApp

.controller('HomeController',function($scope, $http, $state, $cookies, $window) {

		//fetch Data from cookies
		$scope.name = $cookies.get('UserName');
		$scope.userId = $cookies.get('User_id');
		$scope.email = $cookies.get('User_email');
		$scope.loggedIn = $cookies.get('loggedIn');
		console.log("This is something which i want " + $scope.name)


		$http.get(API_URL + "posts/").
		success(function(data, status, headers, config){
			$scope.t_posts = data;
		console.log($scope.t_posts, "hiiii buddy")
		angular.forEach($scope.t_posts,function(posts){
			/*$scope.post = posts.post
			$scope.main = posts.main
			$scope.createdAt = posts.created_at*/

			/*console.log('this is a post', $scope.post);
			console.log('this is that user', $scope.username);
			console.log('this was the time\n', $scope.createdAt);*/

		})
	});
		$scope.do_post = function(){
			$scope.post_title = document.getElementById('blog_title').value
			$scope.post_data = document.getElementById('post').value;
			$scope.username_data = $scope.userId

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
		post_title: $scope.post_title,
		post: $scope.post_data,
		main: $scope.name
	};
	var req = $http.post(
		API_URL + "posts/",dataObj);
	req.success(function(data, status, headers, config){
		console.log(data);
		$state.go('home')
			// console.log("chakk De phatter");
		});
}

	$scope.logout = function(){
		// console.log($scope.loggedIn)
		if ($scope.loggedIn == "true") {
			$cookies.remove('UserName');
			$cookies.remove('User_id');
			$cookies.remove('User_email');
			$cookies.remove('loggedIn');
			$window.location.reload();
		}
	}
});