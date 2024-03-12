const { useState, useEffect } = React
import { bookService } from "../services/book-service.js"

export function BookFilter({ onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getFilterBy())

    useEffect(()=>{
        onSetFilter(filterByToEdit)
    },[filterByToEdit])



    function onFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (type === 'number') value = +value
        setFilterByToEdit((previousFilter) => ({ ...previousFilter, [field]: value }))
    }

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