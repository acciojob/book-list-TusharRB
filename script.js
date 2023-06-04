//your JS code here. If required.
// script.js

// Get the form element
var bookForm = document.getElementById('book-form');

// Add event listener to the form submission
bookForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var isbn = document.getElementById('isbn').value;

  // Create a new row in the table
  var newRow = document.getElementById('book-list').insertRow();
  var titleCell = newRow.insertCell(0);
  var authorCell = newRow.insertCell(1);
  var isbnCell = newRow.insertCell(2);
  var deleteCell = newRow.insertCell(3);

  // Set the cell values
  titleCell.innerHTML = title;
  authorCell.innerHTML = author;
  isbnCell.innerHTML = isbn;
  deleteCell.innerHTML = '<button class="delete">Clear</button>';

  // Clear the form input fields
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

// Delete row when clear button is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete')) {
    var row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
});
