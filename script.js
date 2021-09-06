function submitFormData() {
    //Get all the elements and store it in a variable
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var address = document.getElementById('address');
    var radioButton = document.getElementsByName('customRadioInline');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var zip = document.getElementById('zip');

    var table = document.getElementById('getTable').getElementsByTagName('tbody') [0];
    var newRow = table.insertRow(table.length);

    //Insert new cell for each element
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = fname.value;

    cell2= newRow.insertCell(1);
    cell2.innerHTML = lname.value;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = address.value;

    for (var i = 0; i<radioButton.length; i++) {
        if(radioButton[i].checked) {
          cell4 = newRow.insertCell(3);
          cell4.innerHTML = radioButton[i].value;
        }
      }

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = city.value;

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = state.value;

    cell7 = newRow.insertCell(6);
    cell7.innerHTML = zip.value;

    //Reset form once data is submitted
    document.getElementById('my-form').reset();
}
