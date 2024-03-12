
export function BookDetails({ book, onGoBack }) {
    return <section className="book-details">
        <div className="image-details">
            <img src={book.thumbnail} alt=""></img>
        </div>
        <div className="book-details-description">
            <button className="goBack-btn" onClick={onGoBack}>Go Back</button>
            <div className="DescriptionLineContent">
                <h1>title:</h1>
                <p>{book.title}</p>
            </div>
            <div className="DescriptionLineContent">
                <h1>author:</h1>
                <p>{book.author}</p>
            </div>
            <div className="DescriptionLineContent">
                <h1>pageCount:</h1>
                <p>{book.pageCount}</p>
            </div>
            <div className="DescriptionLineContent">
                <h1> description:</h1>
                <p>{book.description}</p>
            </div>
        </div>
    </section>
}