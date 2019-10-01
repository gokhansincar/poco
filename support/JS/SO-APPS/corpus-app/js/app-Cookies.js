/* GLOBAL
------------------------------------------------*/
//LEVELS
var level = 0;
var achievedLevels = 0;
var nLevels = 3;


//COOKIES
var cookieLevelName = "current-level";
var cookieAchievedName = "achieved-levels";

var cookieLevelVal = parseInt(readCookie(cookieLevelName)); //console.log(cookieLevelVal);
var cookieAchievedVal = parseInt(readCookie(cookieAchievedName)); //console.log(cookieAchievedVal);

//CREATE COOKIES IF NOT EXISTS
if(cookieLevelVal > 0) {
  level = cookieLevelVal;
  achievedLevels = cookieAchievedVal;
} else {
  level = (cookieAchievedVal > 0) ? cookieAchievedVal : 1;
  createCookie(cookieLevelName, level);
  createCookie(cookieAchievedName, 0);
}
console.log('level: ', level);
console.log('achieved levels: ', cookieAchievedVal);

//DATA - Rows and images by row
/*
var data = [
  [2, 3, 2],
  [3, 4, 3],
  [3, 4, 3]
];
*/

/*GAME LEVELS OBJECT*/
var gameLevels = {

  "L1": {
    "rows": [2, 3, 2],
    "completed": false,
    "isReset": false
  },
  "L2": {
    "rows": [3, 4, 3],
    "completed": false,
    "isReset": false
  },
  "L3": {
    "rows": [3, 4, 3],
    "completed": false,
    "isReset": false
  }

}


//Wich data index shall we grab
var levelObj = "L" + level; //"L1", "L2", etc.

//SHORCUT VARS
var rowsArr = gameLevels[levelObj].rows; //console.log("Rows: ", rowsArr);
var nRows = rowsArr.length; //console.log("Rows: ", nRows);
var hex = 1;
var html = '';



/* CREATE HTML
------------------------------------------------*/
//LOOP INTO ROWS
for (var r = 0; r < nRows; r++) {

  var rowImages = rowsArr[r]; //console.log("row Images: " + rowImages);

  html += '<div class="row row-' + (r + 1) + '">\n';

  //LOOP INTO IMAGES
  for(i = 1; i <= rowImages; i++) {

    html += '<img src="assets/level-' + level + '/hex-' + hex + '.svg" data-angle="0" class="hex' + hex + '">\n';
		
    hex++;
		
  } //EMD LOOP IMAGES

  html += '</div>\n';

} //END LOOP ROWS


/* ON DOCUMENT READY
------------------------------------------------*/
$(function() {


	//ON LOAD ------------------------------>
	//Disable Context Menu Globally
  $(document).bind("contextmenu", function(e) {
    //return false; //activate to disable right-click globally
  });
	
	//Add appropriate class to container
	$("#corpus").attr("class", "level-" + level);

  //Fill the container with html created above
  $("#corpus").html(html);

	//Ranomize angles
	$("img").each(function() {

    var randomAngle = ArrRandom(); //ArrRandom() to randomize OR 0 to see the solution (all images with rotation 0)
    $(this).attr("data-angle", randomAngle);
    $(this).css({"transform": "rotate(" + randomAngle + "deg)"});

  });
	//-------------------------------------->


  //On image click ----------------------->
  $("img").on("click", function() {

    var Incr = 60;
    var angle = parseInt($(this).attr("data-angle")) + Incr; //console.log(angle);
    $(this).css({"transform": "rotate(" + angle + "deg)"});

    if(angle >= 360) {
      angle = 0;
    }

    $(this).attr("data-angle", angle);
		
    dataVerify();
		
  });
	//-------------------------------------->


  //On image right click ----------------->
  $("img").on("contextmenu", function(e) {
		
    e.preventDefault();
    
    var Incr = -60;
    var angle = parseInt($(this).attr("data-angle")) + Incr; //console.log(angle);
    $(this).css({"transform": "rotate(" + angle + "deg)"});

    if(angle == -60) {
      angle = 300;
    }

    $(this).attr("data-angle", angle);
		
    dataVerify();
		
  });
	//-------------------------------------->


  //Conditional display ------------------>
  //NEXT BUTTON
  if(level === nLevels) {
    $("#next-level").addClass("hide");
  }
  else {
    if(achievedLevels >= level) {
      $("#next-level").removeClass("hide");
    }
    else {
      $("#next-level").addClass("hide");
    }
  }

  //PREV BUTTON
  if(level > 1) {
    $("#prev-level").removeClass("hide");
  }
  //-------------------------------------->


  //BTNS CLICKS -------------------------->
  //NEXT LEVEL BTN
  $("#next-level").on("click", function(e) {
    e.preventDefault;
    
    //++ prefix return the value BEFORE it has been incremented
    // suffix ++ return the value AFTER it has been incremented
    level++;

    createCookie(cookieLevelName, level); //instead of "level++"" we could use here "++level" or "level+"
    location.reload();
  });


  //PREV LEVEL BTN
  $("#prev-level").on("click", function(e) {
    e.preventDefault;

    //-- prefix return the value BEFORE it has been incremented
    // suffix -- return the value AFTER it has been incremented
    level--;

    createCookie(cookieLevelName, level); //instead of "level--"" we could use here "--level" or "level-1"

    if(level > cookieAchievedVal) {
      createCookie(cookieLevelName, level);
    }

    location.reload();
  });


  //RESET LEVELS BTN
  $("#reset-all-levels").on("click", function(e) {
    e.preventDefault;

    createCookie(cookieLevelName, 1);
    createCookie(cookieAchievedName, 0);
    location.reload();
  });


  //CLOSE OVERLAY BTN
  $("#overlay").on("click", function(e) {
    e.preventDefault;
    $(this).removeClass("reveal");
  });
	//-------------------------------------->


}); //End doc ready



//---------------------------------- FUNCTIONS ----------------------------------//



/* Random array value
------------------------------------------------*/
function ArrRandom() {

  var angles = [60, 120, 180, 240, 300]; //console.log('angles => ', Math.random() * 5);
  return angles[Math.floor(Math.random() * angles.length)];

}
//console.log(ArrRandom());


/* Check if you all data values are 0
------------------------------------------------*/
function dataVerify() {

  var dataValue = 0;

  $("img").each(function() {
    var dataAngle = parseInt($(this).attr("data-angle"));
    dataValue += dataAngle;
  });
  //console.log(dataValue);

  if (dataValue === 0) {

    var wait = setTimeout(function() {
      //$("img, svg").unbind("click");
      //$("img, svg").css({"opacity":"0.3"});
      
      $("#overlay").addClass("reveal");
      
      if(level < nLevels) {
        $("#next-level").removeClass("hide");
      }

      createCookie(cookieAchievedName, level);

      autoCloseOverlay(2000);
    }, 500);
    
  }

}

function autoCloseOverlay(delay) {

  setTimeout(function() {
    $("#overlay").removeClass("reveal");
  }, delay);

}


/* COOKIE STUFF
------------------------------------------------*/
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


/* GET CSS ROTATION VALUE [BAK]
------------------------------------------------*/
function getRotationDegrees(obj) {
	
  var matrix = obj.css("-webkit-transform") ||
  obj.css("-moz-transform")    ||
  obj.css("-ms-transform")     ||
  obj.css("-o-transform")      ||
  obj.css("transform");
	
  if(matrix !== 'none') {
      var values = matrix.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
  } 
	
	else { 
		var angle = 0; 
	}
	
  return (angle < 0) ? angle + 360 : angle;
	
}