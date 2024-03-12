import { BookAuction } from "./Book-Auction.jsx";

export function BookPreview({book, onRemoveBook, onShowDetails}){


    return <article className="bookPreview">
            <h1>{book.title}</h1>
            <h5>{book.subtitle}</h5>
            <img src={book.thumbnail} alt=""></img>
            <h2>price: {book.listPrice.amount} {book.currencyCode} </h2>
            <BookAuction book={book} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </article>
}