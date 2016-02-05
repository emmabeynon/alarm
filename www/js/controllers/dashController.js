angular.module('alarm.dashController', [])

.controller('DashCtrl', function($scope, JourneyPlanner, $interval, LocalStorage) {

  var self = this;
  $scope.callAtInterval = function() {
    self.getJourneyInfo();
    console.log("interval test");
  };

  $interval(function() { $scope.callAtInterval(); }, 30000);

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
});
