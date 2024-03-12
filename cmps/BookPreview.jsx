import { BookAuction } from "./Book-Auction.jsx";

export function BookPreview({book, onRemoveBook, onShowDetails}){

    function bookNameToImage(thumbnail){
        return `./assets/img/${thumbnail}.jpg`
    }

    return <article className="bookPreview">
            <h1>{book.title}</h1>
            <h5>{book.description}</h5>
            <h5>price: {book.listPrice.amount} {book.currencyCode} </h5>
            <img src={bookNameToImage(book.thumbnail)} alt=""></img>
            <BookAuction book={book} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </article>
}