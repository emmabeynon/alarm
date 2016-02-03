angular.module('alarm.controllers', [])

.controller('DashCtrl', function($scope) {
  $scope.timePickerObject = {
    inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
    step: 15,  //Optional
    format: 12,  //Optional
    titleLabel: '12-hour Format',  //Optional
    setLabel: 'Set',  //Optional
    closeLabel: 'Close',  //Optional
    setButtonType: 'button-positive',  //Optional
    closeButtonType: 'button-stable',  //Optional
    callback: function (val) {    //Mandatory
      timePickerCallback(val);
    }
  };
  function timePickerCallback(val) {
    if (typeof (val) === 'undefined') {
      console.log('Time not selected');
    } else {
      var selectedTime = new Date(val * 1000);
      console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
    }
  }
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
  var time;

  self.saveData = function(startingPoint, endPoint , prepTime) {
    window.localStorage['starting-point'] = startingPoint;
    window.localStorage['end-point'] = endPoint;
    window.localStorage['arrival-time'] = time;
    window.localStorage['prep-time'] = prepTime;
    console.log(prepTime)
    console.log(window.localStorage['starting-point']);
    console.log(window.localStorage['end-point']);
    console.log(window.localStorage['arrival-time']);
    console.log(window.localStorage['prep-time']);

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
      time = selectedTime.getUTCHours() + ':' + selectedTime.getUTCMinutes();
    }
  }


});
