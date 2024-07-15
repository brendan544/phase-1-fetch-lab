function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const apiUrl= 'https://anapioficeandfire.com/api/books';

   // Fetch data from API
   fetch(apiUrl)
   .then(response => {
       if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
       }
       return response.json(); // Parse the JSON from the response
   })
}
.then(data => {
  // Call renderBooks function with the JSON data
  renderBooks(data);
})
.catch(error => {
  console.error('Error fetching data:', error);
});
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
