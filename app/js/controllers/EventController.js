'use strict';


// Don't forget, controllers are responsible for creating scope.
eventsApp.controller('EventController', function($scope) {
  $scope.snippet = '<span style="color:red;">Hi There</span>';
  $scope.boolValue = false;
  $scope.myStyle = {color:'purple'};
  $scope.myClass = 'blue';
  $scope.buttonDisabled = true;
  $scope.sortOrder = 'name';
  $scope.event = {
    name: 'Terrier Boot Camp',
    date: '5/27/16',
    time: '8:04 AM',
    location: {
      address: "Nori HQ",
      city: "North Furpaw",
      state: "NO"
    },
    imageUrl: 'http://bit.ly/1sC9JPw',
    sessions: [
      {
        name: 'Stalking Chipmunks for Beginners',
        creatorName: 'Nori',
        duration: 2,
        level: 'Advanced',
        abstract: 'The art of chipmunk stalking is not for the weak of heart.',
        upVoteCount: 0
      },
      {
        name: 'Bunny Tail Gnawing',
        creatorName: 'Archer',
        duration: 1,
        level: 'Beginner',
        abstract: 'We will gnaw one some bunnies.',
        upVoteCount: 0
      },
      {
        name: 'Proper Barks for Squirrels',
        creatorName: 'Colby',
        duration: 4,
        level: 'Beginner',
        abstract: 'This session will be highly interactive, including real life squirrel barking experience.',
        upVoteCount: 0
      },
      {
        name: 'Tricking your Humans 101',
        creatorName: 'Paxton',
        duration: 2,
        level: 'Intermediate',
        abstract: 'After this class, your humans will be cooking you bacon ever morning.',
        upVoteCount: 0
      }
    ]
  };

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };
});