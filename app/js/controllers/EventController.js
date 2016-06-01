'use strict';


// Don't forget, controllers are responsible for creating scope.
eventsApp.controller('EventController', function($scope, eventData) {
  $scope.snippet = '<span style="color:red;">Hi There</span>';
  $scope.boolValue = false;
  $scope.myStyle = {color:'purple'};
  $scope.myClass = 'blue';
  $scope.buttonDisabled = true;
  $scope.sortOrder = 'name';
  $scope.event = eventData.getEvent(function(event) {
    $scope.event = event
  });

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };
});