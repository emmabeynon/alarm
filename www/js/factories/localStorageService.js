angular.module('alarm.localStorageService', [])

.service('LocalStorage', function() {
  var arrivalEpoch = window.localStorage['epoch-time'];
  var prepEpoch = window.localStorage['prep-time'];
  var travelEpoch = window.localStorage['duration-time'] * 60000;
  var alarmEpoch = (arrivalEpoch - prepEpoch - travelEpoch);
  window.localStorage['alarm-time'] = alarmEpoch;
});
