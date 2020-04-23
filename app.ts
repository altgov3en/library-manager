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

/**
 * Destructuring arrays and objects
 * Spread Operators
 */
// const allBooks = [...util.GetAllBooks(), ...schoolBook];

// let poets = ['Shelley', 'Collins', 'Hughes'];
// let authors = ['Tolstoy', 'Fitzgerald', ...poets];



/**
 * Tuple Types
 */
// const allBooks = [...util.GetAllBooks(), ...schoolBook];
// const book = allBooks[1];
// let catalogLocation: [string, Book] = ['A 325.213', book];

// console.log(catalogLocation[0]);
// console.log(catalogLocation[1]);

// interface KeyValuePair<K, V> extends Array<K | V> {
//     0: K;
//     1: V;
// }

// const book1 = allBooks[2];
// let catalogLocation1: KeyValuePair<string, Book> = ['A 325.213', book1];

// console.log(catalogLocation1[0]);
// console.log(catalogLocation1[1]);

/**
 * Union and Intersection Types
 */
// const allBooks: Book[] = util.GetAllBooks();
// const allCatalogs: Magazine[] = util.GetAllMagazines();


// const readingItem: Magazine | Book = allBooks[0];

// function printReadingItem(item: Magazine | Book){
//     console.log(JSON.stringify(item));
// }

// printReadingItem(allCatalogs[0]);
// printReadingItem(allBooks[0]);

