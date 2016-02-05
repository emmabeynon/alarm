angular.module('alarm.settingsController', [])

.controller('SettingsCtrl', function($scope) {
  var self = this;
  var settings;
  var mins;
  var hours;
  var time;
  var epoch;

  self.saveData = function(startingPoint, endPoint , prepTime) {
    var prepTimeEpoch = prepTime * 60 * 1000;
    window.localStorage['starting-point'] = startingPoint;
    window.localStorage['end-point'] = endPoint;
    window.localStorage['arrival-time-mins'] = mins;
    window.localStorage['arrival-time-hours'] = hours;
    window.localStorage['prep-time'] = prepTimeEpoch;
    window.localStorage['full-time'] = time;
    window.localStorage['epoch-time'] = epoch;
    console.log(window.localStorage['starting-point']);
    console.log(window.localStorage['end-point']);
    console.log(window.localStorage['arrival-time-hours']);
    console.log(window.localStorage['arrival-time-mins']);
    console.log(window.localStorage['prep-time']);
    console.log(window.localStorage['epoch-time']);
  };


    $scope.timePickerObject12Hour = {
    inputEpochTime: ((new Date()).getHours() * 60 * 60),
    callback: function (val) {
      timePicker12Callback(val);
    }
  };

  function timePicker12Callback(val) {
    if (typeof (val) === 'undefined') {
      console.log('Time not selected');
    } else {
      epoch = val * 1000;
      $scope.timePickerObject12Hour.inputEpochTime = val;
      var selectedTime = new Date(val * 1000);
      mins = (selectedTime.getUTCMinutes() < 10) ? ("0" + selectedTime.getUTCMinutes()) : (selectedTime.getUTCMinutes());
      hours = (selectedTime.getUTCHours() < 10) ? ("0" + selectedTime.getUTCHours()) : (selectedTime.getUTCHours());
      time = hours + "" + mins;
      time = parseInt(time);
    }
  }
});
