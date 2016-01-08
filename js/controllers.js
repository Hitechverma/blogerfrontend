// define(['angular'], function (angular) {
	'use strict';

	// return angular.module('blogApp.controllers', ['myApp.services'])
	
	/*blogApp.controller('LoginCtrl', ['$scope', '$http', 'auth', 'store', '$location', function ($scope, $http, auth, store, $location) {

		$scope.login = function () {
			auth.signin({}, function (profile, token) {
			      // Success callback
			      store.set('profile', profile);
			      store.set('token', token);
			      // $location.path('/');
			      console.log(profile)

			  }, function () {
			      // Error callback
			  });
		};


	}]);
*/
	blogApp.controller('LoginCtrl',['$scope','$http','$state','$cookies', function($scope, $http, $state, $cookies){
		$scope.loginbutton = function(){
			console.log("Chal gya BAba");

			OAuth.initialize('t2Be9dHhBgSCiepQvCa-sSqF4-E')
			OAuth.popup('google').done(function(result) {
				//Here is the result which we get from google 
			    // console.log(result)
			    	console.log(result.access_token);
			    	$scope.access_token = result.access_token;
			    //result is an json object which has data in me()
			    result.me().done(function(data) {
				    // do something with `data`, e.g. print data.name
				    // console.log(data);
				    $scope.name = data.name
				    $scope.email = data.email
				    var userObj = {
						access_token : $scope.access_token,
						User_name: $scope.name,
						email: $scope.email
					};

				    var req = $http.post(
					API_URL + "user/",userObj);
					req.success(function(data, status, headers, config){
						console.log(data);
						// $state.go('home')
						$cookies.put('User_id', data.id);
						$cookies.put('UserName', data.User_name);
						$cookies.put('User_email', data.email);
						$cookies.put('loggedIn', true);
						// console.log($cookies)
						$state.go('home')
					});

				})
			})
		}
	}])

	blogApp.controller('HomeController',function($scope, $http, $state, $cookies) {

		//fetch Data from cookies
		$scope.name = $cookies.get('UserName');
		$scope.userId = $cookies.get('User_id');
		$scope.email = $cookies.get('User_email');
		console.log("This is something which i want " + $scope.name)


		$http.get(API_URL + "posts/").
		success(function(data, status, headers, config){
			$scope.t_posts = data;
		console.log($scope.t_posts, "hiiii buddy")
		angular.forEach($scope.t_posts,function(posts){
			$scope.post = posts.post
			$scope.main = posts.main
			$scope.createdAt = posts.created_at

			/*console.log('this is a post', $scope.post);
			console.log('this is that user', $scope.username);
			console.log('this was the time\n', $scope.createdAt);*/

		})
	});
		$scope.do_post = function(){
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
});
/*});*/