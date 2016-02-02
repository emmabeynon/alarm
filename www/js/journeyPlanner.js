// var start = 'nw52nr';
// var end = 'e83qa';

var app_id = '7700674b';
var app_key = 'c1ff6d6ec7059a90e3613c0d19f21012';


function getJourneyInfo(start, end) {
 var url = "https://api.tfl.gov.uk/Journey/JourneyResults/"+start+"/to/"+end+"?nationalSearch=False&timeIs=Departing&journeyPreference=LeastTime&walkingSpeed=Average&cyclePreference=None&alternativeCycle=False&alternativeWalking=True&applyHtmlMarkup=False&useMultiModalCall=False&app_id="+app_id+"&app_key="+app_key+"";
 var xhttp = new XMLHttpRequest();
 xhttp.responseType = 'json';
 xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4 && xhttp.status == 200) {
     var journeyResponse = xhttp.response.journeys[1];
     var journeyDuration = journeyResponse.duration;
     var journeyStartTime = journeyResponse.startDateTime;
     var journeyEndTime = journeyResponse.arrivalDateTime;
     var journeyArray = [journeyStartTime, journeyDuration, journeyEndTime];

    //  document.getElementById("duration").innerHTML = journeyDuration;
    //  document.getElementById("startTime").innerHTML = journeyStartTime;
     document.getElementById("endTime").innerHTML = journeyArray[2];
   }
 };
 xhttp.open("GET", url, true);
 xhttp.send();
}
