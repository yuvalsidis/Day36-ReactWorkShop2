import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";

const BOOK_KEY = 'BOOKS'
let gFilterBy = {title: '', price: 50}

//For data model ONLY
const gDataModelCatagory = ["Computers", "Hack", "kitchen", "science" ]
const gDataModelYearPublsihed = createDates()


export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy,
}

_createBooks()

function query(filterBy) {
    return storageService.query(BOOK_KEY)
        .then (books =>{
            if(filterBy.title){
                const regex =  new RegExp(filterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if(filterBy.price){
                books = books.filter(book => book.listPrice.amount <= filterBy.price)
            }
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

function getFilterBy() {
    return {...gFilterBy}
}

function setFilterBy(filterBy = {}) {
    console.log('filterby',filterBy)
    if(filterBy.title !== undefined) gFilterBy.title = filterBy.title
    if(filterBy.price !== undefined) gFilterBy.price = filterBy.price
    console.log('gFilterBy', gFilterBy)
    return gFilterBy
}


function getEmptyBook() {
    return {
       id : "",
       title : "metus hendrerit",
       subtitle : "mi est eros dapibus himenaeos",
       authors: [ "Barbara Cartland" ],
       publishedDate: 1999,
       description: "placerat nisi sodales suscipit tellus",
       pageCount: 713,
       categories: [ "Computers", "Hack" ],
       thumbnail: "http://ca.org/books-photos/20.jpg",
       language: "en",
       listPrice: { 
       amount: 109,
       currencyCode: "EUR",
       isOnSale: false
       }
   }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        for(var i = 0; i < 20; i++){
            books.push(_createBook(i))
        }
        utilService.saveToStorage(BOOK_KEY, books)
    }
}


function _createBook(imgIdx) {
    const book = getEmptyBook()
    book.id = utilService.makeId()
    book.title = utilService.makeLorem(3)
    book.subtitle = utilService.makeLorem(6)
    book.listPrice.amount = utilService.getRandomIntInclusive(20, 200)
    book.description = utilService.makeLorem(100)
    book.pageCount = utilService.getRandomIntInclusive(100, 600)
    book.categories = utilService.getRandomArrayFromArray(gDataModelCatagory)
    book.thumbnail = `./assets/img/${imgIdx + 1}.jpg`
    book.publishedDate =  gDataModelYearPublsihed[imgIdx + 1]
    return book
}



function createDates() {
    const arr = []
    let startDate = 1813 
    for(let i = 0; i < 4; i++){
        arr.push(2024) 
        // console.log('first array i :',i, 'and element in arr now :', arr[i])
    }
    for(let i = 4; i < 20; i++){
        arr[i] = startDate
        arr.push(startDate)
        startDate += 11
        // console.log('second array i :',i, 'and element in arr now :', arr[i])
    }
    return  utilService.shuffleArray(arr)
}