
export function BookDetails({book, onGoBack}) {
    return <section className="BookDetails">
        <button className="goBack-btn" onClick={onGoBack}>Go Back</button>
        <h1 className="header">title:</h1>
        <p>{book.title}</p>
        <h2 className="header">author:</h2>
        <p>{book.author}</p>
        <h2 className="header">publishedDate:</h2>
        <p>{book.publishedDate}</p>
        <h1 className="header">pageCount:</h1>
        <p>{book.pageCount}</p>
        <h2 className="header">description:</h2>
        <p>{book.description}</p>
    </section>
}