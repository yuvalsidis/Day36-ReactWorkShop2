import { BookAuction } from "./Book-Auction.jsx";

export function BookPreview({book, onRemoveBook, onShowDetails}){
    function convertTitleToImgString(title){
        let stringWitoutSpaces = title.replace(/\s/g, "");
        return stringWitoutSpaces
    }

    function bookNameToImage(title){
        const newTitle = convertTitleToImgString(title)
        return `./assets/img/BooksImages/${newTitle}.jpg`
    }

    return <article className="bookPreview">
            <h1>{book.title}</h1>
            <h5>{book.description}</h5>
            <h5>price: {book.listPrice.amount} {book.currencyCode} </h5>
            <img src={bookNameToImage(book.title)} alt=""></img>
            <BookAuction book={book} onRemoveBook={onRemoveBook} onShowDetails={onShowDetails}/>
    </article>
}