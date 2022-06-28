const addBtn = document.querySelector('.add');
const bookLocation = document.querySelector('.books-location');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

bookLocation.style.display = 'block';
let bookCollection = [];

// add book function
const addBook = () => {
addBtn.addEventListener('click', () => {
    const libraryData = {
        id: bookCollection.length ? bookCollection[bookCollection.length -1].id + 1 : 1,
        title: title.value,
        author: author.value
    }
    // CREATE THE BOOK
    const bookItem = document.createElement('div');
    bookItem.classList.add('myBook');
    bookLocation.appendChild(bookItem);
    // title
    const bookTitle = document.createElement('h4');
    bookTitle.classList.add('booktitle');
    bookTitle.innerHTML = title.value;
    bookItem.appendChild(bookTitle);
    // author
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookauthor');
    bookAuthor.innerHTML = author.value;
    bookItem.appendChild(bookAuthor);
    // remove button
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.innerHTML = 'Remove';
    bookItem.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        removeBook(libraryData.id);
        // console.log(libraryData.id);
        // const filteredBooks = bookCollection.filter((libraryData) => libraryData.id !== id);
    })

    bookCollection.push(libraryData);
    console.log(bookCollection)
    title.value = '';
    author.value = '';
})
}
addBook();

// remove book function
const removeBook = (id) => {
   
    const filteredBooks = bookCollection.filter((libraryData) => libraryData.id !== id);
    return filteredBooks;

}
// removeBook();



