var blogApp = angular.module('blogApp',['ui.router']);
var API_URL = "http://127.0.0.1:8000/";
blogApp.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "partials/homepage.html",
		controller: "HomeController",
	})
	$urlRouterProvider.otherwise('/');
})