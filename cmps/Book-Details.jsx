
export function BookDetails(book) {
    return <section className="BookDetails">
        <h1>title: {book.title}</h1>
        <h2>author: {book.author}</h2>
        <h5>description: {book.description}</h5>
    </section>
}