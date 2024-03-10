import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

const BOOK_KEY = 'BOOKS'
export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
}

_createBooks()

function query() {
    return storageService.query(BOOK_KEY)
        .then (books =>{
            return books
        })
}
function get(id) {
    return storageService.get(BOOK_KEY, id)
}

function remove(id) {
    return storageService.remove(BOOK_KEY, id)
}

function save(book) {
    if (book.id) {
        storageService.put(BOOK_KEY, book)
    }
    else {
        storageService.post(BOOK_KEY, book)
    }
}

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books =>{
            var idx = books.findIndex(book => book.id = bookId)
            if(idx === books.length - 1) idx = -1
            return books[idx + 1].id
        })
}


function getEmptyBook() {
    return {
        id: '',
        author: '',
        title: '',
        description: '',
        listPrice: {
            amount: null,
            currencyCode: "",
            isOnSale: false
        }
    }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(
            _createBook('Gwent',
                'Art of the witcher card game',
                { amount: 109, currencyCode: 'EUR', isOnSale: 'false' })
        )
        books.push(
            _createBook('Between here and gone',
                'Between here and gone',
                { amount: 10, currencyCode: 'EUR', isOnSale: 'false' })
        )
        books.push(
            _createBook('Magic lantern',
                'The triskell mystery part 3',
                { amount: 300, currencyCode: 'EUR', isOnSale: 'false' })
        )
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description, listPrice) {
    const book = getEmptyBook()
    book.id = utilService.makeId()
    book.title = title
    book.listPrice = listPrice
    book.description = description
    return book
}