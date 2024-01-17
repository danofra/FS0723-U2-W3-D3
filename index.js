fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("c'è un errore");
    }
  })
  .then((books) => {
    const bookArray = books.map((book) => {
      return { title: book.title, price: book.price, img: book.img };
    });
    console.log(bookArray);

    bookArray.forEach((book, index) => {
      const form = document.getElementById("books-form");
      const books = document.createElement("div");
      books.classList.add("col-12", "col-sm-6", "col-md-3", "mt-3");
      form.appendChild(books);
      books.innerHTML = `
      <div class="card h-100">
      <img src="${book.img}" class="card-img-top" alt="copertina libro" height="50%">
      <div class="card-body d-flex flex-column justify-content-between">
      <h6 class="card-title">${book.title}</h6>
      <p class="card-text">${book.price}</p>
      <button type="button" id="delete-button${index}" class="btn btn-danger">elimina</button>
      </div>
      </div>`;
      const deleteFilm = document.getElementById(`delete-button${index}`);
      deleteFilm.addEventListener("click", () => {
        form.removeChild(books);
      });
    });
  })
  .catch();
