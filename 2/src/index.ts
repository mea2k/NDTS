///////////////////////////////////////////////////////////////////////////////
// ТЕСТОВЫЕ ДАННЫЕ
///////////////////////////////////////////////////////////////////////////////

const book1: Book = {
    title: "Сольная книжка",
    authors: ["Я.Сам"],
    id: 1
}

const book2: Book = {
    title: "Коллективная книжка",
    authors: ["Автор1", "Автор2", "Автор3"],
    id: 2
}

const book3: Book = {
    title: "Большая советская энциклопедия",
    id: 100
}

///////////////////////////////////////////////////////////////////////////////
// ФУНКЦИЯ ПОЛУЧЕНИЯ ИНФОРМАЦИОННОЙ СТРОКИ О КНИЖКЕ
///////////////////////////////////////////////////////////////////////////////
function getInfo(book: Book): string {
    let res: string = `${book.id}: `
    if (book.authors && book.authors.length > 2)
        res = res + `${book.title} - ` + book.authors.join(',')
    else if (book.authors && book.authors.length <= 2)
        res = res + book.authors.join(',') + ` - ${book.title}`
    else
        res = res + `${book.title}`

    return res
}


///////////////////////////////////////////////////////////////////////////////
// ОТОБРАЖЕНИЕ ИНФОРМАЦИИ НА INDEX.HTML
///////////////////////////////////////////////////////////////////////////////
const mainDiv = document.getElementById('main')
const booksList = document.createElement('ul')

// book1
const listItem1 = document.createElement('li')
listItem1.innerText = getInfo(book1)
booksList.appendChild(listItem1)

// book2
const listItem2 = document.createElement('li')
listItem2.innerText = getInfo(book2)
booksList.appendChild(listItem2)

// book3
const listItem3 = document.createElement('li')
listItem3.innerText = getInfo(book3)
booksList.appendChild(listItem3)

if (mainDiv) {
    mainDiv.appendChild(booksList)
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
