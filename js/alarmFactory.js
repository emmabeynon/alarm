alarm.factory('Placeholder', ['$http', function($http) {

  var queryUrl = ;
  var access_token = ;

  return {
    query: function(placeholder) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': placeholder,
          'access_token': access_token
        }
      });
    }
  };
}]);
