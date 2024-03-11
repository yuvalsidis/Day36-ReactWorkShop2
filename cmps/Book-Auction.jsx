

export function BookAuction({book, onRemoveBook, onShowDetails}){
    console.log('the book', book)
    console.log('Book auction work')
    return <section className="book-auction">
        <button className="remove-btn" onClick={(ev) => onRemoveBook(ev,book.id)}>X</button>
        <button className="details" onClick={(ev) => onShowDetails(ev,book)}>details</button>
        </section>
    
}