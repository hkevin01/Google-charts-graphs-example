//------------------------------------------------
var MS_PER_MINUTE = 60000;
//------------------------------------------------
var coords = "";
var platformId = "";
//------------------------------------------------
var date_obs_end = new Date();
var date_obs_start = new Date(); date_obs_start.setUTCHours(date_obs_end.getUTCHours()-1);
//---------------------------------------------------------------------------------------------------
var start_time = new Date(Date.UTC(date_obs_start.getFullYear(), date_obs_start.getUTCMonth() , date_obs_start.getUTCDate(), 
		date_obs_start.getUTCHours(), date_obs_start.getUTCMinutes() ) );

var end_time = new Date(Date.UTC(date_obs_end.getFullYear(), date_obs_end.getUTCMonth() , date_obs_end.getUTCDate(), 
		date_obs_end.getUTCHours(), date_obs_end.getUTCMinutes() ) );
//---------------------------------------------------------------------------------------------------
start_time = start_time.getTime();
end_time = end_time.getTime();
//------------------------------------------------

function init_chart(){
	
	coords = "";
	drawChart("temp",		"chart_div",				"Temperature (C\u00B0)", 198);
	drawChart("road",		"chart_div_road",			"Temperature (C\u00B0)", 137);
	drawChart("pressure",	"chart_div_pressure",		"Pressure", 224);
	drawChart("ozone",		"chart_div_ozone",			"Parts Per Billion", 135);
	drawChart("humidity",	"chart_div_humidity",		"Humidity", 136);
	drawChart("precip",		"chart_div_precip",			"Rain Intensity", 137);
	drawChart("lux",		"chart_div_lux",			"Light Level", 133);
	drawChart("elevation",	"chart_div_elevation",		"Elevation", 133);
	drawChart("jdataat",	"chart_div_jdataat",		"J-Data Air Temp (C\u00B0)", 136);
	drawChart("jdatabp",	"chart_div_jdatabp",		"JData Barometric Pressure", 143);
}

function drawChart(chartType, chartDiv, vTitle, flag){

	var hTitle = "Time (UTC) : " + (date_obs_start.getMonth() + 1) + "/" + 
	date_obs_start.getDate() + "/" + date_obs_start.getFullYear() + " to " +
	(date_obs_end.getMonth() + 1) + "/" + date_obs_end.getDate() + "/" + date_obs_end.getFullYear();
	
	if(date_obs_start.getDate() == date_obs_end.getDate() && date_obs_start.getMonth() == date_obs_end.getMonth() ){
		hTitle =  "Time (UTC) : " + (date_obs_start.getMonth() + 1) + "/" + 
		date_obs_start.getDate() + "/" + date_obs_start.getFullYear();
	}
	//alert("START TIME: " + start_time + " END TIME:" + end_time);
	
	 var jsonData = $.ajax({
        url:  urlPath + "getData.php",
        dataType:"json",
        data: { platform : platformId, chart: chartType, start: start_time, end: end_time },
        async: false
        }).responseText;
   
   var chart_div = document.getElementById(chartDiv);
   // ALERT
   if (jsonData.length == flag || typeof jsonData === "undefined" ){
	   document.getElementById(chartDiv).style.display = "none";	
   } else{ 	document.getElementById(chartDiv).style.display = "inline";
   
   
      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(jsonData);

      var options = {
        width: 700, height: 420,
        title: 'Time Series for Vehicle Id: ' + platformId,
        hAxis: {title: hTitle},
        vAxis: {title: vTitle},
        curveType: "function",
    //    lineWidth: 0,
     //   pointSize: 2,
        'chartArea':{width:"60%"}
      };
      
      var chart = new google.visualization.LineChart(chart_div);
      
      // The select handler. Call the chart's getSelection() method
      function selectHandler() {
          var selectedItem = chart.getSelection()[0];
          if (selectedItem) {
        	//  getLocation( data.getValue(selectedItem.row, 0) );
          }
        }
   
  	  google.visualization.events.addListener(chart, 'select', selectHandler);   
      
      //draws chart with data
	  chart.draw(data, options);  
	  
   }
}


function show_msg(){
	
	if( document.getElementById("chart_div").style.display == "none" && 
		document.getElementById("chart_div_humidity").style.display == "none" &&
		document.getElementById("chart_div_ozone").style.display == "none" &&
		document.getElementById("chart_div_precip").style.display == "none" &&
		document.getElementById("chart_div_pressure").style.display == "none" &&
		document.getElementById("chart_div_road").style.display == "none" &&
		document.getElementById("chart_div_lux").style.display == "none" &&
		document.getElementById("chart_div_elevation").style.display == "none" &&
		document.getElementById("chart_div_jdataat").style.display == "none" && 
		document.getElementById("chart_div_jdatabp").style.display == "none"){
		
		alert("No Charts could be displayed for selected time.");
	}
}
