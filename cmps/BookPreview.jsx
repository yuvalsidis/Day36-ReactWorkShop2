
export function BookPreview({book}){

    function bookNameToImage(title){
        let stringWitoutSpaces = title.replace(/\s/g, "");
        console.log(stringWitoutSpaces)
        let toLowerCase = stringWitoutSpaces.toLowerCase()
        console.log(toLowerCase)
        return title
    }

    return <article className="bookPreview">
            <h1>{book.title}</h1>
            <h5>{book.description}</h5>
            <h5>price: {book.listPrice.amount} {book.currencyCode} </h5>
            <img src="./assets/img/BooksImages/{bookNameToImage(book.title)}.jpg" alt=""></img>
    </article>
}