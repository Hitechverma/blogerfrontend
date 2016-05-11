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
	blogApp.controller('LoginCtrl',['$scope','$http','$state','$window','$cookies', function($scope, $http, $state, $window, $cookies){
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
				    console.log(data);
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
						// console.log(data[1])
						/*for (var i=0; i<data.length; i++)
						    for (var name in data[i]) {
						        console.log(data[0][name]);
						    }*/
						// console.log(data[0]);
						$cookies.put('User_id', data[0].id);
						$cookies.put('UserName', data[0].User_name);
						$cookies.put('User_email', data[0].email);
						$cookies.put('loggedIn', true);
						// console.log($cookies)
						// $window.location.reload();
						// $state.go('home')
					});

				})
			})
		}
	}])

/*});*/