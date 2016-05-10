var app = angular.module('basicApp',[])

app.controller('MainController',function($scope, Details){
 Details.getDetails().then(function(response){
     $scope.persons = response.data.results;
     console.log($scope.persons)
 });
});

app.service('Details', function($http, $q, $timeout){
    var getDetails = function() {
        var deferred = $q.defer();
        $timeout(function() {
      deferred.resolve($http.get('http://api.randomuser.me/?results=10'));
    });

        return deferred.promise;
  };
    return{
        getDetails: getDetails
    }
   /* return{
        getDetails: function(){
            return $http.get('http://api.randomuser.me/?results=10');
              
        }
    }*/
});

app.directive('myCard',function(){
    return{
   restrict:'AEC',
   scope:{
       user:"="
   },
   templateUrl:'card.html',
   controller:function($scope){
       $scope.changeDate = function(date){
           return moment(date).format("MMM Do YYYY")
       }
   }
}
});

