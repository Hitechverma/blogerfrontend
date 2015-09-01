var blogApp = angular.module('blogApp',['ui.router']);
var API_URL = "http://30.0.0.13:8000/";
blogApp.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "partials/homepage.html",
		controller: "HomeController",
	})
	.state('post', {
		url: "/post",
		templateUrl: "partials/blogpost.html",
		controller: "HomeController",
	})
	$urlRouterProvider.otherwise('/');
})