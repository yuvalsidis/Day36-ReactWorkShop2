const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/BookList.jsx"
export function BookIndex() {
    const [books, setBooks] = useState(null)

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
        console.log('Show Detailes', book)
    }

    console.log(books)
    if(!books) return <h1> loading books... </h1>
    return <section className="book-index">
         <h1>Our books</h1>
         <BookList books={books} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </section>
}