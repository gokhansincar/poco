//const id = document.querySelector("body").id;
var fakeId = 100;


/* LISTEN FOR CLICK EVENT ON WHOLE DOCUMENT
========================================================*/
document.addEventListener("click", function(event) {


  const elem = event.target; //console.log(elem.id);

  
  /* NEW SETTINGS
  ----------------------------------------*/
  /*#region*/
  if(elem.id === "new-settings") {

    fakeId++; //console.log(fakeId);

    //Table row
    let tableBody = document.querySelector("#admin-list tbody");
    let tableTr = document.createElement("tr");

    tableTr.innerHTML = `<td>${fakeId}</td>
    <td class="uk-width-small"><input type="text" name="settings[${fakeId}][key]" value="" class="uk-input"></td>
    <td class="uk-width-xlarge"><input type="text" name="settings[${fakeId}][value]" value="" class="uk-input"></td>
    <td class="tools">
      <a class="tool edit delete-link-js" href="javascript:void(0);">x</a>
    </td>`;
    
    tableBody.appendChild(tableTr);

  }
  /*#endregion*/


  /* DELETE LINK
  ----------------------------------------*/
  /*#region*/
  else if(elem.classList.contains("delete-link") || elem.id === "logout") {

    event.preventDefault();

    let href = elem.href;
    let msg = "";

    //MESSAGE
    if(elem.id === "logout") {
      msg = "Do you really want to LOGOUT ?";
    }
    else {
      msg = "Do you really WANT TO DELETE this item ???";
    }

    //UIKIT MODAL CONFIRM
    UIkit.modal.confirm(msg).then(function() {
      //Do this if click on OK:
      window.location.replace(href);
    }, function () {
      //Do you want to do something if click CANCEL ?
    });
    
    /*
    //JS NATIVE CONFIRM
    if(confirm(msg)) {
      window.location.replace(href);
    }
    */

  }
  /*#endregion*/


});



/* UIKIT SORTABLE
========================================================*/
UIkit.util.on('.sortable', 'moved', function () {

  //UIkit.notification('Item has been moved.', 'success');
  const updatePosWrap = document.querySelector("#update-positions-wrap");
  updatePosWrap.classList.remove("DN");

});