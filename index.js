const myBooks = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    isbn: '978-0465050659',
    alreadyRead: false,
    coverUrl: 'link...',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    isbn: '978-1617933431',
    alreadyRead: true,
    coverUrl: 'link..',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    isbn: '978-0201616224',
    alreadyRead: true,
    coverUrl: 'link..',
  },
];

const bookListDiv = document.getElementById('bookList');

const ulElement = document.createElement('ul');

myBooks.forEach((book) => {
  const liElement = document.createElement('li');

  if (book.alreadyRead) {
    liElement.classList.add('read');
  } else {
    liElement.classList.add('not-read');
  }

  const bookInfo = document.createElement('p');
  bookInfo.textContent = `${book.title} by ${book.author}`;

  const bookImage = document.createElement('img');
  bookImage.src = book.coverUrl;

  liElement.appendChild(bookImage);
  liElement.appendChild(bookInfo);
  ulElement.appendChild(liElement);
});

bookListDiv.appendChild(ulElement);
