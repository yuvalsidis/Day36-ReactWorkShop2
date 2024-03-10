
export function BookPreview({book}){
    return <article class="bookPreview">
            <h1>{book.title}</h1>
            <h5>{book.description}</h5>
            <h5>price: {book.listPrice.amount} {book.currencyCode} </h5>
    </article>
}