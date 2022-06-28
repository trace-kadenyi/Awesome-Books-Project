const addBtn = document.querySelector('.add');
const bookLocation = document.querySelector('.books-location');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

bookLocation.style.display = 'block';
let bookCollection = JSON.parse(localStorage.getItem('libraryData')) ? JSON.parse(localStorage.getItem('libraryData')):[];

const displayBooks = () => {
        let books = JSON.parse(localStorage.getItem('libraryData')).map((book) => 
            `<div class="myBook" style="display: block"><h4 class="booktitle">${book.title}</h4><p class="bookauthor">${book.author}</p><button class="remove" id="${book.id}" onClick="removeBook(${book.id})">Remove</button></div>`
        ).join('');
        bookLocation.innerHTML = books;
    }

// add book function
const addBook = () => {
addBtn.addEventListener('click', () => {
    const libraryData = {
        id: bookCollection.length ? bookCollection[bookCollection.length -1].id + 1 : 1,
        title: title.value,
        author: author.value
    }
    bookCollection.push(libraryData);
    localStorage.setItem('libraryData', JSON.stringify(bookCollection));
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
    removeButton.setAttribute('id', libraryData.id);
    removeButton.innerHTML = 'Remove';
    
    removeButton.addEventListener('click', (e) => {
        const bookId = e.target.id;
        removeBook(bookId);
    })

    bookItem.appendChild(removeButton);
    title.value = '';
    author.value = '';
})
    window.onload = () => {
        displayBooks();
    }
}
addBook();


// remove book function
const removeBook = (id) => {
    const filteredBooks = bookCollection.filter((book) => book.id !== id);
    bookCollection = filteredBooks;
    localStorage.setItem('libraryData', JSON.stringify(bookCollection));
    displayBooks();

}



