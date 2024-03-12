import { utilService } from "../services/util.service.js"

export function BookDetails({ book, onGoBack }) {
    
    

    function publishedDateToText() {
        const currentYear = utilService.getCurrectYear()

        if( book.publishedDate = currentYear  || book.publishedDate === currentYear - 1  ){
            return 'New'
        } 
            
        console.log('currect year - 10',(currentYear - 10), 'book year', book.publishedDate )
        if(book.publishedDate < currentYear - 10) {
            return 'Vintage'
        }
    }

    function textLevelSign () {
        const {pageCount} = book
        if(pageCount > 500){
            return 'Serious Reading!'
        }
        else if(pageCount > 200 ){
            return 'Descent Reading!'
        } 
        else if(pageCount < 100){
            return 'Light Reading!'
        }        
    }

    const styleTextLevel = {
                            backgroundColor: 'gold',
                            display: 'inline-block',
                            textDecoration: 'none',
                            marginLeft: '1em'
                           }

    return <section className="book-details">
        <div className="image-details">
            <img src={book.thumbnail} alt=""></img>
        </div>
        <div className="book-details-description">
            <button className="goBack-btn" onClick={onGoBack}>Go Back</button>
            <h1 style={styleTextLevel}>{textLevelSign()}</h1>
            <h1 style={{...styleTextLevel, backgroundColor: 'orange'}}>{publishedDateToText()}</h1>
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