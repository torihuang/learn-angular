'use strict';

eventsApp.filter('durations', function() {
  return function(duration) {
    switch(duration) {
      case 1:
        return '30 Minutes';
      case 2:
        return '1 Hour';
      case 3:
        return '1.5 Hours';
      case 4:
        return '2 Hours';
    }
  }
})