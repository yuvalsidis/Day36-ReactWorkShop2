import { BookPreview } from "./BookPreview.jsx"

export function BookList({books, onRemoveBook , onShowDetails}){

    return <ul className = "book-list clean-list ">
        {
            books.map(book => <li key={book.id}>
                 <BookPreview book={book} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
            </li>)
               
        }
    </ul>
    
    
}