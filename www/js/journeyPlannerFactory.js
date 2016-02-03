angular.module('alarm.journeyPlannerFactory', [])

.factory('JourneyPlanner', ['$http', function($http) {

 var start = window.localStorage['starting-point'];
 var end = window.localStorage['end-point'];
 // var date = '20160302';
 var desiredArrivalTime = window.localStorage['full-time'];
 // var timeIs = 'arriving';
 // var journeyPreference = 'leastTime';
 // var mode = 'tube';
 var app_id = '7700674b';
 var app_key = 'c1ff6d6ec7059a90e3613c0d19f21012';
 var queryUrl = "https://api.tfl.gov.uk/Journey/JourneyResults/"+start+"/to/"+end+"?nationalSearch=False&timeIs=Departing&journeyPreference=LeastTime&walkingSpeed=Average&cyclePreference=None&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id="+app_id+"&app_key="+app_key+"";

 return {
   query: function(start, end) {
     return $http({
       url: queryUrl,
       method: 'GET',
       params: {
         'from': start,
         'to': end,
         'time': desiredArrivalTime,
        //  'date': date,
         // 'timeIs': timeIs,
         // 'journeyPreference': journeyPreference,
         // 'mode': mode,
         'app_id': app_id,
         'app_key': app_key

       }
     });
   }
 };
}]);
