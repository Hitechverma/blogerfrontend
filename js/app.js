var blogApp = angular.module('blogApp',['ui.router','ngCookies']);
var API_URL = "http://127.0.0.1:8000/";
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
	.state('login', {
		url: "/login",
		templateUrl: "partials/login.html",
		controller: "HomeController",
	})
	$urlRouterProvider.otherwise('/');
})