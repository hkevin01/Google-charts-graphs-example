<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN'
	'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml'>

<?php 

$platform =$_GET['platform'];

?>

<head>
<script type='text/javascript' src='https://www.google.com/jsapi'></script>
<script type='text/javascript' src='http://code.jquery.com/jquery-1.5.js'></script>
<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js'></script>
<script type='text/javascript' src='js/graph.js'></script>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!-- StyleSheet Stuff -->
<link rel="stylesheet" href="css/general.css" type="text/css" />
<link rel="stylesheet" href="css/jquery-ui-1.8.14.custom.css" type="text/css" />
<?php 

echo <<<EOB

	    <script type='text/javascript'>
	    
	     	platformId = {$platform};
	      	google.load('visualization', '1', {packages:['corechart']});
	     
		</script>
    
	</head>
	  <body>
	   <div id="container">
		<ul>
			<li>
				<div id='cboxLoadingGraphic'> &nbsp; </div>
			</li>
			<li>
				<div id='chart_div' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_jdataat' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_road' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_humidity' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_precip' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_lux' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_pressure' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_jdatabp' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_elevation' style='width: 500px; height: 400px;'> </div>
			</li>
			<li>
				<div id='chart_div_ozone' style='width: 500px; height: 400px;'> </div>
			</li>
		<ul>
		</div>
		<script type='text/javascript'>
			if(platformId != ""){
			      			
				$('cboxLoadingGraphic').show();
				google.setOnLoadCallback( drawChart("temp",		"chart_div",			"Temperature (C\u00B0)", 198) );
				google.setOnLoadCallback( drawChart("road",		"chart_div_road",		"Temperature (C\u00B0)", 137) );
				google.setOnLoadCallback( drawChart("pressure",	"chart_div_pressure",	"Pressure", 224) );
				google.setOnLoadCallback( drawChart("ozone",	"chart_div_ozone",		"Parts Per Billion", 135) );
				google.setOnLoadCallback( drawChart("humidity",	"chart_div_humidity",	"Humidity", 136) );
				google.setOnLoadCallback( drawChart("precip",	"chart_div_precip",		"Rain Intensity", 137) );
				google.setOnLoadCallback( drawChart("lux",		"chart_div_lux",		"Light Level", 133) );
				google.setOnLoadCallback( drawChart("elevation","chart_div_elevation",	"Elevation", 133) );
				google.setOnLoadCallback( drawChart("jdataat",	"chart_div_jdataat",	"J-Data Air Temp (C\u00B0)", 136) );
				google.setOnLoadCallback( drawChart("jdatabp",	"chart_div_jdatabp",	"JData Barometric Pressure", 143) );
				$('cboxLoadingGraphic').hide();
	      	}
    	</script>
			
	  </body>
	</html>
  
EOB;
	die();

?>
