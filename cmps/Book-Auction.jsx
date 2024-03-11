export function BookAuction({book, onRemoveBook}){
    console.log('the book', book)
    console.log('Book auction work')
    return <button className="remove-btn" onClick={(ev) => onRemoveBook(ev,book.id)}>X</button>
}