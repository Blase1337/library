const myLibrary = [];

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
};

function addBookToLibrary(event) {
    event.preventDefault();
    const bookName = document.getElementById("bookName").value;
    const bookAuthor = document.getElementById("bookAuthor").value;
    const pageNumber = document.getElementById("pageNumber").value;

    let bookObject = new Book(bookName, bookAuthor, pageNumber);
    myLibrary.push(bookObject);
    const container = document.getElementById("main");
    container.innerHTML = '';

    document.getElementById("bookName").value = '';
    document.getElementById("bookAuthor").value = '';
    document.getElementById("pageNumber").value = '';

    addToTable(myLibrary);
}

function addToTable(arr) {
    const container = document.getElementById("main");
    container.innerHTML = '';

    arr.forEach((book, index) =>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Title: ${book.title}<br><br> Author: ${book.author}<br><br> Pages: ${book.pages}<br><br> Read: ${book.read ? "Yes" : "No"}<br><br>`;
        newDiv.classList.add('book-item');
        //Remove Button
        const newBtn = document.createElement('button');
        newBtn.textContent = "Remove";
        newBtn.type = "button";
        newBtn.setAttribute('data-index', index);
        newBtn.addEventListener("click", () => {
            removeBook(index, newDiv);
        });
        //Toggle Read Button
        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.type = "button";
        toggleReadBtn.textContent = "Toggle Read";
        toggleReadBtn.addEventListener("click", ()=>{
            book.toggleReadStatus();
            addToTable(arr)
        });
        
        newDiv.appendChild(toggleReadBtn);
        newDiv.appendChild(newBtn);
        container.appendChild(newDiv);
    });
}

function removeBook(index, element){
    myLibrary.splice(index, 1); // Remove the book from the array
    element.remove(); // Directly remove the corresponding DOM element
    addToTable(myLibrary); // Re-render the table to ensure indices are updated
}

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

document.getElementById("closeForm").addEventListener("click", ()=>{
        const form = document.getElementById("form");
        form.style.display = "none"
});





