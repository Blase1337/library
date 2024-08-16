const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const pageNumber = document.getElementById("pageNumber").value;
    let bookObject = new Book(bookName, bookAuthor, pageNumber);
    myLibrary.push(bookObject);
    const container = document.getElementById("main");
    container.innerHTML = '';

    addToTable(myLibrary);


}

function addToTable(arr) {
    const container = document.getElementById("main");
    arr.forEach(book =>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Title: ${book.title}<br> <br> Author: ${book.author}<br> <br> Pages: ${book.pages}`;
        newDiv.classList.add('book-item');
        container.appendChild(newDiv);
    })
}

document.getElementById("closeForm").addEventListener("click", ()=>{
        const form = document.getElementById("form");
        form.style.display = "none"
});


document.getElementById("addBookButton").addEventListener("click", addBookToLibrary);

document.getElementById("newBookButton").addEventListener("click", ()=>{
    const form = document.getElementById("form");
    if(form.style.display === "none" || form.style.display == ""){
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
});



