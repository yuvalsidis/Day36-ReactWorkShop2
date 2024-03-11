
export function BookDetails({book, onGoBack}) {
    return <section className="BookDetails">
        <button className="goBack-btn" onClick={onGoBack}>Go Back</button>
        <h1>title: {book.title}</h1>
        <h2>author: {book.author}</h2>
        <h5>description: {book.description}</h5>
    </section>
}