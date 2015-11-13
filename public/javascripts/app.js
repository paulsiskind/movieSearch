var app = angular.module("movieApp", ['ngRoute'])

  app.controller('HomeController', function($scope, $http){
    $scope.movieSearch = function(){
       console.log($scope.search)
      $http.get('http://www.omdbapi.com/?s=' + $scope.search.toLowerCase() + '&r=json').then(function(data){
        $scope.movies = data.data.Search;
        console.log($scope.movie)
      })
       $http.get('http://www.omdbapi.com/?i=' + $scope.search.toLowerCase() + '&r=json').then(function (response) {
          $scope.details = response.data;
          console.log('Hello')
        });
     $scope.search ='';
   }
    

  })
  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .otherwise( {redirectTo: '/'
      })
      $locationProvider.html5Mode(true)

});

  //   app.controller('ChatController',['$scope', '$http', function($scope, $http){
  //   $http.get('https://still-tundra-8387.herokuapp.com/').then(function(data){
  //   $scope.chatData = data.data;
  //    })
  //   $scope.submit = function(){
  //     var message = {
  //       name: $scope.chat.name,
  //    content: $scope.chat.comment};
    
  //   $http.post('https://still-tundra-8387.herokuapp.com/', {message: message}).then(function(data){
  //  console.log(data.data)
  //    },function(){})
  //     $scope.chat = {};
  // }

  // }])