eventsApp.factory('eventData', function($resource) {
  var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
  return {
    getEvent: function(eventId) {
      return resource.get({id:eventId});
    },
    save: function(event) {
      event.id = 999;
      return resource.save(event);
    },
    getAllEvents: function() {
      console.log('in EventData getAllEvents');
      console.log(resource.query());
      console.log(resource.query());
      return resource.query();
    }
  }
});

// name: 'Terrier Boot Camp',
//       date: '5/27/16',
//       time: '8:04 AM',
//       location: {
//         address: "Nori HQ",
//         city: "North Furpaw",
//         state: "NO"
//       },
//       imageUrl: 'http://bit.ly/1sC9JPw',
//       sessions: [
//         {
//           name: 'Stalking Chipmunks for Beginners',
//           creatorName: 'Nori',
//           duration: 2,
//           level: 'Advanced',
//           abstract: 'The art of chipmunk stalking is not for the weak of heart.',
//           upVoteCount: 0
//         },
//         {
//           name: 'Bunny Tail Gnawing',
//           creatorName: 'Archer',
//           duration: 1,
//           level: 'Beginner',
//           abstract: 'We will gnaw one some bunnies.',
//           upVoteCount: 0
//         },
//         {
//           name: 'Proper Barks for Squirrels',
//           creatorName: 'Colby',
//           duration: 4,
//           level: 'Beginner',
//           abstract: 'This session will be highly interactive, including real life squirrel barking experience.',
//           upVoteCount: 0
//         },
//         {
//           name: 'Tricking your Humans 101',
//           creatorName: 'Paxton',
//           duration: 2,
//           level: 'Intermediate',
//           abstract: 'After this class, your humans will be cooking you bacon ever morning.',
//           upVoteCount: 0
//         }
//       ]
//     }
//   }