angular.module('alarm.controllers', [])


.controller('DashCtrl', function($scope) {
  var self = this;
  self.alarmTime = window.localStorage['full-time'];
})

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })


.controller('SettingsCtrl', function($scope) {
  var self = this;
  var settings;
  var mins;
  var hours;
  var time;

  self.saveData = function(startingPoint, endPoint , prepTime) {
    window.localStorage['starting-point'] = startingPoint;
    window.localStorage['end-point'] = endPoint;
    window.localStorage['arrival-time-mins'] = mins;
    window.localStorage['arrival-time-hours'] = hours;
    window.localStorage['prep-time'] = prepTime;
    window.localStorage['full-time'] = time;
    console.log(window.localStorage['starting-point']);
    console.log(window.localStorage['end-point']);
    console.log(window.localStorage['arrival-time-hours']);
    console.log(window.localStorage['arrival-time-mins']);
    console.log(window.localStorage['prep-time']);
    console.log(time);
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
      $scope.timePickerObject12Hour.inputEpochTime = val;
      var selectedTime = new Date(val * 1000);
      mins = selectedTime.getUTCMinutes();
      hours = selectedTime.getUTCHours();
      time = hours + ':' + mins;
    }
  }

});
