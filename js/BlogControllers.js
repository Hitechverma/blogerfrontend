blogApp.controller('BlogCtrl',['$scope','$http','$stateParams',function($scope,$http,stateParams){
	
	var blog_id = stateParams.idx
	console.log(blog_id)
	$http.get(API_URL + "blogs/" + blog_id).
		success(function(data,status,header,config){
			$scope.blog_post = data
			console.log(data)
		})
	
}])