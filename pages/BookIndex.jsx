const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../cmps/Book-Details.jsx"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [showDetailsBook, setShowDetailsBook] = useState(null)

    useEffect( () =>{
        loadBooks()
    }, [])

    function loadBooks(){
        bookService.query()
            .then((books) =>{
                setBooks(books)
            })
    }

    function onRemoveBook(ev,id) {
        ev.preventDefault()
        console.log('Removing a Book', id)    
        bookService.remove(id)
            .then((books) =>{
                setBooks((prevBooks)=> prevBooks.filter(book => book.id !== id))
            })
            .catch((err) => {
                console.log('Book didn\'t removed', err)
            })
    }

    function onShowDetails(ev, book){
        ev.preventDefault()
        setShowDetailsBook(book)
    }

    console.log('showDetailsBook', showDetailsBook)
    if(!books) return <h1> loading books... </h1>
    if(showDetailsBook) return <BookDetails book={showDetailsBook}/>
    return <section className="book-index">
         <h1>Our books</h1>
         <BookList books={books} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </section>
}