
export function BookFilter() {
    return <section className="book-filter">
        <h2>Filter Our Cars</h2>
        <form>

        <div class="inputContainer">
        <lable for="price">Price : </lable>
        <input type="number" id="price : " placeholder="Enter a price"></input>
        </div>

        <div class="inputContainer">
        <lable for="title">Title : </lable>
        <input type="text" id="title" placeholder="Enter a title"></input>
        </div>

        </form>
    </section>
}