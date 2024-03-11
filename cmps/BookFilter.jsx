const  { useState } = React
import { bookService } from "../services/book-service.js"

export function BookFilter() {
    const [filterByToEdit,setFilterByToEdit] = useState(bookService.getFilterBy())
    console.log(filterByToEdit)


    function handleChange({target}){
        const {value, name} = target
       setFilterByToEdit((previosFilter) => ({...filterByToEdit, [name]: value}))
    }
    
    console.log('filterByToEdit',filterByToEdit)
    return <section className="book-filter">
        <h2>Filter Our Books</h2>
        <form>

            <div className="inputContainer">
                <lable htmlFor="price">Price : </lable>
                <input type="number" id="price" name="price" placeholder="Enter a price" value={filterByToEdit.price} onChange={handleChange}></input>
            </div>

            <div className="inputContainer">
                <lable htmlFor="title">Title : </lable>
                <input type="text" id="title" name="title" placeholder="Enter a title" value={filterByToEdit.title} onChange={handleChange}></input>
            </div>

        </form>
    </section>
}