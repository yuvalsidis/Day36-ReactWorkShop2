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

    console.log(books)
    if(!books) return <h1> loading books... </h1>
    return <section className="book-index">
         <h1>Our books</h1>
         <BookList books={books}/>
    </section>
}