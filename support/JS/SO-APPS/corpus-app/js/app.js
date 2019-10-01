/* GAME INIT
------------------------------------------------*/
//#region
var gameData = {

  "levelsData": [
    {
      "rows": [2, 3, 2],
      "completed": false
    },
    {
      "rows": [3, 4, 3],
      "completed": false
    },
    {
      "rows": [3, 4, 3],
      "completed": false
    }
  ],

  "currentLevel": 1,
  "achievedLevels": 0

}
//#endregion


/* LOCAL STORAGE
 * Remember: Objects can be stored ONLY as Strings
 * Ref: https://stackoverflow.com/a/2010948
------------------------------------------------*/
//#region
var gameStorage = localStorage.getItem("gameData");

//IF there is a gameData in localStorage, grab the string and convert it to object 
if(gameStorage) {
  gameData = JSON.parse(gameStorage); //console.log('localStorage gameData :', gameData.levelsData)
}

//ELSE, will create convert gameData object into string and store it in localStorage
else {
  storeData(gameData);
}

//console.log('gameData :', gameData);
//#endregion


/* SHORCUT VARS
------------------------------------------------*/
//#region
var levelsData      = gameData.levelsData; //Array of objects
var nLevels         = levelsData.length; //console.log("nLevels: ", nLevels);
var level           = gameData.currentLevel; //console.log('level :', level);
var levelArrIndex   = level - 1;
var achievedLevels  = gameData.achievedLevels;

var rowsArr         = levelsData[levelArrIndex].rows; //console.log("Rows: ", rowsArr);
var nRows           = rowsArr.length; //console.log("Rows: ", nRows);
var hex             = 1;
var html            = '';
//#endregion


/* CREATE HTML WITH THE CURRENT LEVEL
------------------------------------------------*/
//#region
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
//#endregion


/* ON DOCUMENT READY
------------------------------------------------*/
//#region
$(function() {


  //ON LOAD ------------------------------>
  //#region
	//Disable Context Menu Globally
  $(document).bind("contextmenu", function(e) {
    //return false; //activate to disable right-click globally
  });
	
	//Add appropriate class to container
	$("#corpus").attr("class", "level-" + level);

  //Fill the container with html created above
  $("#corpus").html(html);

  //Fill status items
  $("#current-level").text(level);
  $("#total-levels").text(nLevels);

  //Ranomize angles - Only if completed is false !
  var randomAngle = (levelsData[levelArrIndex].completed === false) ? ArrRandom() : 0;

  $("img").each(function() {
    //var randomAngle = ArrRandom(); //ArrRandom() to randomize OR 0 to see the solution (all images with rotation 0)
    $(this).attr("data-angle", randomAngle);
    $(this).css({"transform": "rotate(" + randomAngle + "deg)"});
  });
  //#endregion
	//-------------------------------------->


  //On image click ----------------------->
  //#region
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
  //#endregion
	//-------------------------------------->


  //On image right click ----------------->
  //#region
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
  //#endregion
	//-------------------------------------->


  //Conditional display ------------------>
  //#region
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
  } else {
    $("#prev-level").addClass("hide");
  }
  //#endregion
  //-------------------------------------->


  //BTNS CLICKS -------------------------->
  //#region
  //All a buttons
  $("a.button").on("click", function(e) {
    e.preventDefault;
  });


  //NEXT LEVEL BTN
  $("#next-level").on("click", function(e) {
    
    if(level >= nLevels) {
      return false;
    }

    level++;
    gameData.currentLevel = level;
    storeData(gameData);
    location.reload();
  });


  //PREV LEVEL BTN
  $("#prev-level").on("click", function(e) {

    if(level === 1) {
      return false;
    }

    level--;
    gameData.currentLevel = level;
    storeData(gameData);
    location.reload();

  });


  //RESET CURRENT LEVEL
  $("#reset-level").on("click", function(e) {

    gameData.levelsData[levelArrIndex].completed = false;
    storeData(gameData);
    location.reload();

  });


  //RESET LEVELS BTN
  $("#reset-all-levels").on("click", function(e) {

    gameData.currentLevel = 1;
    gameData.achievedLevels = 0;

    for(var i = 0; i < nLevels; i++) {
      gameData.levelsData[i].completed = false;
    }

    storeData(gameData);
    location.reload();

  });


  //CLOSE OVERLAY BTN
  $("#overlay").on("click", function(e) {
    autoCloseOverlay(50);
  });
  //#endregion
	//-------------------------------------->


}); //End doc ready
//#endregion



//---------------------------------- FUNCTIONS ----------------------------------//



/* Random array value
------------------------------------------------*/
//#region
function ArrRandom() {

  var angles = [60, 120, 180, 240, 300]; //console.log('angles => ', Math.random() * 5);
  return angles[Math.floor(Math.random() * angles.length)];

}
//console.log(ArrRandom());
//#endregion


/* Check if you all data values are 0
------------------------------------------------*/
//#region
function dataVerify() {

  //CHECK data-angle on images and sum the values
  var dataValue = 0;

  $("img").each(function() {
    var dataAngle = parseInt($(this).attr("data-angle"));
    dataValue += dataAngle;
  });
  //console.log(dataValue);


  //Check img data values. IF ALL ANGLES ARE AT ZERO => Level is done.
  if (dataValue === 0) {
    
    //Show hide stuff
    if(level === nLevels) {
      $("#overlay h2").removeClass("hide");
    }

    if(level < nLevels) {
      $("#next-level").removeClass("hide");
    }

    //Update acieved levels
    if(achievedLevels < level) {
      gameData.achievedLevels = level;
    }

    //Update Level
    if(level < nLevels) {
      level++;
    }
    gameData.currentLevel = level;

    //Update level "completed"
    gameData.levelsData[levelArrIndex].completed = true;

    //Store the object
    storeData(gameData);


    //DISPLAY OVERLAY
    var wait = setTimeout(function() {

      $("#overlay").addClass("reveal");
      autoCloseOverlay(3000); //→ this function contains a page reload

    }, 600); //End overlay

    
  } //End dataValue check


} //Enf Data verify
//#endregion


/* Check if you all data values are 0
------------------------------------------------*/
//#region
function autoCloseOverlay(delay) {

  setTimeout(function() {
    location.reload();
  }, delay);

}
//#endregion


/* LOCAL STORAGE setItem HELPER
------------------------------------------------*/
//#region
//STORE GAME DATA
function storeData(gameData) {
  localStorage.setItem("gameData", JSON.stringify(gameData));
}
//#endregion