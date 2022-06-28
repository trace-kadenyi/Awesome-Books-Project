const displayBooks = document.querySelector('.display');
const addBtn = document.querySelector('.add');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

let libraryCollection = JSON.parse(localStorage.getItem('libraryData')) ? JSON.parse(localStorage.getItem('libraryData')) : [];
// display books function
const viewBooks = () => {
    let books = JSON.parse(localStorage.getItem('libraryData')).map((book) => 
    `<div class="myBook"><h3 class="title">${book.title}</h3><p class="author">${book.author}</p><button class="remove" id="${book.id}" onClick="removeBookFromList(${book.id})">Remove</button><hr></div>`
    ).join('');
    displayBooks.innerHTML = books;
}
// add books 
addBtn.addEventListener('click', () => {
    const book = {
        id: libraryCollection.length ? libraryCollection[libraryCollection.length - 1].id + 1 : 1,
        title: title.value,
        author: author.value
    }

    libraryCollection.push(book);
    localStorage.setItem('libraryData', JSON.stringify(libraryCollection));
    //book container
    const bookItem = document.createElement('div');
    bookItem.classList.add('myBook');
    bookItem.setAttribute('style', 'display: block');
    displayBooks.appendChild(bookItem);
    //title
    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('title');
    bookTitle.innerHTML = title.value;
    bookItem.appendChild(bookTitle);
    //author
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('author');
    bookAuthor.innerHTML = author.value;
    bookItem.appendChild(bookAuthor);
    //remove button'
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('id', book.id);
    removeBtn.innerHTML = 'Remove';
    bookItem.appendChild(removeBtn);

    const breakLine = document.createElement('hr');
    bookItem.appendChild(breakLine);

    removeBtn.addEventListener('click', (e) => {
        const bookId = book.id;
        removeBookFromList(bookId);

    })
    title.value = '';
    author.value = '';
});
// load items
window.onload = () => {
    viewBooks();
}

// remove books from list
const removeBookFromList = (id) => {
    const bookDelete = JSON.parse(localStorage.getItem('libraryData')).filter((book) => book.id !== id);
    console.log(bookDelete);
    libraryCollection = bookDelete;
    localStorage.setItem('libraryData', JSON.stringify(libraryCollection));
    viewBooks();
}
