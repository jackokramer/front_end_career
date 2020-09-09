// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes=[]) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

Book.prototype.addTheme= function(newTheme){
    this.themes = [...this.themes, newTheme]
}

const book1 = new Book(1, `Breathe`, `James Nestor`)

const book2 = new Book(2, `Chaos`, `Tom Oneill`)

const book3 = new Book(3, `Electirc Acid Kool Aid Test`, `Tom Wolfe`)

book1.addTheme(`informative`)
book2.addTheme(`cultural studies`)
book3.addTheme(`historical`)

console.log(book1)

console.log(book2)
console.log(book3)

//repitition 