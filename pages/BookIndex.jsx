const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"
import { BookList } from "../cmps/BookList.jsx"
import { BookDetails } from "../cmps/Book-Details.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

export function BookIndex() {
    const [books, setBooks] = useState(null)
    const [showDetailsBook, setShowDetailsBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getFilterBy())

    useEffect( () =>{
        loadBooks()
    }, [filterBy])

    function loadBooks(){
        bookService.query(filterBy)
            .then((books) =>{
                setBooks(books)
            })
    }

    function onSetFilter(fieldsToUpdate) {
        console.log('fieldsToUpdate', fieldsToUpdate)
        setFilterBy((previousFilter) => ({...previousFilter, ...fieldsToUpdate}))    
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

    function onGoBack() {
        console.log('Going back')
        setShowDetailsBook(null)
    }

    if(!books) return <h1> loading books... </h1>
    if(showDetailsBook) return <BookDetails book={showDetailsBook} onGoBack={onGoBack}/>
    return <section className="book-index">
         <BookFilter onSetFilter={onSetFilter}/>
         <h1>Our books</h1>
         {!books && <h1>No books matches...</h1>}
         <BookList books={books} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </section>
}