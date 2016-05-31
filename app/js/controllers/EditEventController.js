'use strict';

eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event, newEventForm) {
      if(newEventForm.$valid) {
        console.log(newEventForm)
        window.alert(event.name + ' event was saved!');
      }
    };
    $scope.cancelEdit = function() {
      window.location = './EventDetails.html'
    }
})