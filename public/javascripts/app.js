var app = angular.module("movieApp", ['ngRoute'])

  app.controller('MovieController', function($scope, $http, $routeParams, $location){
    $scope.movieSearch = function(){
       console.log($scope.search)
      $http.get('http://www.omdbapi.com/?s=' + $scope.search.toLowerCase() + '&r=json').then(function (response){
        console.log(response.data)
        $scope.movies = response.data.Search;
      })
     $location.url('/movies/'+ $scope.search)
   }

 
      $http.get('http://www.omdbapi.com/?i=' + $routeParams.movieTitle+ '&r=json').then(function (response) {
        console.log(response.data)
          $scope.details = response.data;
        });
    
     
  })

  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'partials/blank.html',
        controller: 'MovieController'
      })
      .when('/movies/:movie', {
        templateUrl: "partials/home.html",
        controller: "MovieController"
      })
      .when('/:movieTitle/show', {
        templateUrl: 'partials/show.html',
        controller: 'MovieController'
      })
      .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

});

 