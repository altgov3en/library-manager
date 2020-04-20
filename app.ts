import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

function printBookInfo({ title, author }: Book) {
    console.log(`'${title}' was authored by '${author}'`);
}

// let [book1, book2, ...rest]: Book[] = util.GetAllBooks();

// printBookInfo(book1);
// printBookInfo(book2);
// rest.forEach(i => printBookInfo(i));

// let { title: specialTitle, author: specialAuthor } = book1;

// console.log(specialTitle);
// console.log(specialAuthor);

const schoolBook: Book[] = [
    { id: 10, author: 'J.K. Rowling', title: 'Harry Potter and The Goblet of Fire', available: true, category: Category.Children },
    { id: 11, author: 'Anita Desai', title: 'Clear Light of Day', available: true, category: Category.Fiction },
    { id: 12, author: 'Fyodor Dostoyevsky', title: 'Crime and Punishment', available: true, category: Category.History }
]

const allBooks = [...util.GetAllBooks(), ...schoolBook];

allBooks.forEach(book => printBookInfo(book));
