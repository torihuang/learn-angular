'use strict';


// Don't forget, controllers are responsible for creating scope.
eventsApp.controller('EventController', function($scope, eventData, $log, $anchorScroll) {
  $scope.snippet = '<span style="color:red;">Hi There</span>';
  $scope.boolValue = false;
  $scope.myStyle = {color:'purple'};
  $scope.myClass = 'blue';
  $scope.buttonDisabled = true;
  $scope.sortOrder = 'name';
  eventData.getEvent()
    .$promise
      .then(function(event) {$scope.event = event; console.log(event);})
      .catch(function(response) {$console.log(response);})

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };

  $scope.scrollToSession = function() {
    $anchorScroll();
  }
});