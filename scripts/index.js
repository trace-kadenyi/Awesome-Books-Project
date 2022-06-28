const addBtn = document.querySelector('.add');
const bookLocation = document.querySelector('.books-location');

let bookCollection = JSON.parse(localStorage.getItem('formData')) ? JSON.parse(localStorage.getItem('formData')):[];
const displayBooks = () => {
    let books = JSON.parse(localStorage.getItem('formData')).map((book) => 
        `<div class="mybook" style="display: block"><p class="booktitle">${book.theTitle}</p><p class="bookAuthor">${book.theAuthor}</p><button class="remove" id="${book.id}" onClick="removeBook(${book.id})">Remove</button></div>`
    ).join('');
    bookLocation.innerHTML = books;
}
addBtn.addEventListener('click', () => {
    console.log("clicked")
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const formData = {
        id: bookCollection.length,
        theTitle: title,
        theAuthor: author,
    };
    bookCollection.push(formData);
    console.log(bookCollection);
    localStorage.setItem('formData', JSON.stringify(bookCollection));
    const book = document.createElement('div');
    book.classList.add('mybook');
    book.setAttribute('style', 'display: block');
    bookLocation.appendChild(book);

    const bookTitle = document.createElement('p');
    bookTitle.classList.add('booktitle');
    bookTitle.innerHTML = title;
    book.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.innerHTML = author;
    book.appendChild(bookAuthor);

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.setAttribute('id', formData.id);
    removeButton.innerHTML = 'Remove';


    removeButton.addEventListener('click', (e) => {
        const bookId = e.target.id;
        removeBook(bookId);
    })
    book.appendChild(removeButton);
});
window.onload = () => {
    displayBooks();
};

const removeBook = (id) => {
    const bookDelete = JSON.parse(localStorage.getItem('formData')).filter((book) => book.id !== id);
    bookCollection = bookDelete;
    localStorage.setItem('formData', JSON.stringify(bookCollection));
    displayBooks();
}



// const addBtn = document.querySelector('.add');
// const bookLocation = document.querySelector('.books-location');
// const title = document.querySelector('#title');
// const author = document.querySelector('#author');

// bookLocation.style.display = 'block';
// let bookCollection = [];

// // add book function
// const addBook = () => {
// addBtn.addEventListener('click', () => {
//     const libraryData = {
//         id: bookCollection.length ? bookCollection[bookCollection.length -1].id + 1 : 1,
//         title: title.value,
//         author: author.value
//     }
//     // CREATE THE BOOK
//     const bookItem = document.createElement('div');
//     bookItem.classList.add('myBook');
//     bookLocation.appendChild(bookItem);
//     // title
//     const bookTitle = document.createElement('h4');
//     bookTitle.classList.add('booktitle');
//     bookTitle.innerHTML = title.value;
//     bookItem.appendChild(bookTitle);
//     // author
//     const bookAuthor = document.createElement('p');
//     bookAuthor.classList.add('bookauthor');
//     bookAuthor.innerHTML = author.value;
//     bookItem.appendChild(bookAuthor);
//     // remove button
//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove');
//     removeButton.innerHTML = 'Remove';
//     bookItem.appendChild(removeButton);

//     removeButton.addEventListener('click', () => {
//         removeBook(libraryData.id);
//         // console.log(libraryData.id);
//         // const filteredBooks = bookCollection.filter((libraryData) => libraryData.id !== id);
//     })

//     bookCollection.push(libraryData);
//     console.log(bookCollection)
//     title.value = '';
//     author.value = '';
// })
// }
// addBook();

// // remove book function
// const removeBook = (id) => {
   
//     const filteredBooks = bookCollection.filter((libraryData) => libraryData.id !== id);
//     return filteredBooks;

// }
// // removeBook();



