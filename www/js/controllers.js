angular.module('alarm.controllers', [])

.controller('DashCtrl', function($scope) {})

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

.controller('SettingsCtrl', function() {
  var self = this;
  var settings;

  self.saveData = function(startingPoint) {
    window.localStorage['starting-point'] = startingPoint;
    console.log(window.localStorage['starting-point']);
  };
});
