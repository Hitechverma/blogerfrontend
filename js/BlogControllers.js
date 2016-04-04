blogApp.controller('BlogCtrl',['$scope','$http','$stateParams','$cookies', '$state','$window',function($scope,$http,stateParams,$cookies, $state, $window){
	
	var blog_id = stateParams.idx
	console.log(blog_id)

	//fetch Data from cookies
		$scope.name = $cookies.get('UserName');
		$scope.userId = $cookies.get('User_id');
		$scope.email = $cookies.get('User_email');
		$scope.loggedIn = $cookies.get('loggedIn');

	$http.get(API_URL + "blogs/" + blog_id).
		success(function(data,status,header,config){
			$scope.blog_post = data
			console.log(data)
			$scope.blog_title = data.post_title
			$scope.blog_content = data.post
			$scope.blog_creator = data.main
			$scope.blog_time = data.created_at
			$scope.hasComment = data.has_comment
			$scope.comments = data.comments
		})
	
	$scope.do_comment = function(){
		$scope.comment_data = document.getElementById('commentData').value
		console.log($scope.comment_data)

		var dataObject = {
			blogid : blog_id,
			author : $scope.userId,
			comment_data : $scope.comment_data
		}

		var request = $http.post(API_URL + "comment/" + blog_id ,dataObject);
		request.success(function(data,status,header,config){
			console.log("this data is comming from commentz     "  + data);
			$window.location.reload();
		})

	}
}])