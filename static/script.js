// Function to search specified column
function searchTable(searchID, tableID) {
  // Setup variables for use
  var input, filter, table, tr, td, i, col;
  // Get the elements using the provided ID
  input = document.getElementById(searchID);
  filter = input.value.toUpperCase();
  table = document.getElementById(tableID);
  tr = table.getElementsByTagName("tr");
  column = document.getElementById("boatSelect");
  col = column.value;

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[col];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        // Show the table row
        tr[i].style.display = "";
      } else {
        // Hide the table row
        tr[i].style.display = "none";
      }
    }
  }
}
// Function to search all columns in table
function allsearchTable(searchID, tableID) {
  // Setup variables for use
  var input, filter, table, tr, td, i;
  // Get the elements using the provided ID
  input = document.getElementById(searchID);
  filter = input.value.toUpperCase();
  table = document.getElementById(tableID);
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (j = 0; j < td.length; j++) {
      if (td[j]) {
        if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
          // Show the table row
          tr[i].style.display = "";
          break;
        } else {
          // Hide the table row
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function clickHandle(evt, animalName) {
  let i, tabcontent, tablinks;
  // This is to clear the previous clicked content.
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Set the tab to be "active".
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  // Display the clicked tab and set it to active.
  document.getElementById(animalName).style.display = "block";
  evt.currentTarget.className += " active";
}

function isLight() {
  // Check the setting in browser storage
  return localStorage.getItem("light-mode");
}
function toggleRootClass() {
  // Toggle the css root class between disabled and active
  document.querySelector(":root").classList.toggle("light");
}
function toggleLocalStorageItem() {
  if (isLight()) {
    // Save setting into browser storage
    localStorage.removeItem("light-mode");
    // Change the buttons text to say dark theme
    document.querySelector('#themeBtn').textContent = 'Dark Theme';
  } else {
    // Save setting into browser storage
    localStorage.setItem("light-mode", "set");
    // Change the buttons text to say light theme
    document.querySelector('#themeBtn').textContent = 'Light Theme';
  }
}
if (isLight()) {
  // Recall saved setting when page is refreshed
  toggleRootClass();
  document.querySelector('#themeBtn').textContent = 'Light Theme';
}

function toggleTheme()  {
  toggleLocalStorageItem();
  toggleRootClass();
};


// Change the selector if needed
// var $table = $('table'),
//   $bodyCells = $table.find('tbody tr:first').children(),
//   colWidth;

// // Get the tbody columns width array
// colWidth = $bodyCells.map(function () {
//   return $(this).width();
// }).get();

// // Set the width of thead columns
// $table.find('thead tr').children().each(function (i, v) {
//   $(v).width(colWidth[i]);
// });

