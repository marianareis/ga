// select the input field and store it in a variable
//going to manipulate it later

// listen to submit of form

// fire a call to a function - add new entry

// define the new entry function (add a new tr -table row - in the html)

// add new row, innerHTML of entries

// update the total

window.onload = function() {
  var d = document;
  var entryField = d.getElementById("newEntry");
  d.getElementById("entry").onsubmit = addNewEntry;
  var total = 0;


  function addNewEntry() {
    var entry = parseFloat(entryField.value);
    total += entry;
    d.getElementById("total").innerHTML = convertCurrency(total);

    var entryValue = convertCurrency(entryField.value);
    //console.log(entryValue);
    var entryRow = "<tr><td></td><td>" + entryValue + "</td></tr>";
    //+= prevents it from overwriting the new entry
    d.getElementById("entries").innerHTML += entryRow;
//prevent the default behaviour of a form submission (send the data somewhere else and to refresh the page)
    clearInput ();
    return false;
  }

  var clearInput = function () {
    entryField.value = " ";
  }

  function convertCurrency(entryValue) {
    var currency = parseFloat(entryValue);
    currency = currency.toFixed(2);
    currency = "£" + currency;
    return currency;
  }

}






