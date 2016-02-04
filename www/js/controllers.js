angular.module('alarm.controllers', [])
.controller('DashCtrl', function($scope, JourneyPlanner, $interval) {

  var self = this;
  var arrivalEpoch = window.localStorage['epoch-time'];
  var prepEpoch = window.localStorage['prep-time'];
  var travelEpoch = window.localStorage['duration-time'] * 60000;
  var alarmEpoch = (arrivalEpoch - prepEpoch - travelEpoch);

  $scope.callAtInterval = function() {
    self.getJourneyInfo();
    console.log("interval test");
  };

  $interval(function() { $scope.callAtInterval(); }, 30000);

  console.log(alarmEpoch);
  self.alarmTime = alarmEpoch;
  self.epoch = window.localStorage['epoch-time'];

  self.getJourneyInfo = function() {
    console.log("test");
    JourneyPlanner.query(self.start, self.end)
      .then(function(response) {
        self.result = response.data;
        window.localStorage['duration-time'] = response.data.journeys[1].duration;
        var duration = window.localStorage['duration-time'];
        var startTime = response.data.journeys[1].startDateTime;
        var endTime = response.data.journeys[1].arrivalDateTime;
        var disruptions = response.data.journeys[1].legs[0].isDisrupted;
        var lineServiceStatus = response.data.lines[0].lineStatuses[0].statusSeverityDescription;
        window.localStorage['line-status'] = lineServiceStatus;
        self.alert = window.localStorage['line-status'];
        console.log(startTime);
        console.log(endTime);
        console.log(duration);
        console.log(lineServiceStatus);
        console.log(disruptions);
        console.log(response.data);
      });
  };

})

.controller('ApiCtrl', function($scope) {
 var self = this;
 var start;
 var end;
})

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
      console.log(val);
      epoch = val * 1000;
      $scope.timePickerObject12Hour.inputEpochTime = val;
      var selectedTime = new Date(val * 1000);
      console.log(selectedTime);
      mins = (selectedTime.getUTCMinutes() < 10) ? ("0" + selectedTime.getUTCMinutes()) : (selectedTime.getUTCMinutes());
      console.log(mins);
      hours = (selectedTime.getUTCHours() < 10) ? ("0" + selectedTime.getUTCHours()) : (selectedTime.getUTCHours());
      console.log(hours);
      time = hours + "" + mins;
      time = parseInt(time);
      console.log(time);
    }
  }

});
