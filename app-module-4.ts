import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';
import "./LibrarianExtension";

/** 
 * Polymorphic 'this' types
 * Fluent API (chaining methods together with '.'
 *  */
// class LibraryBook {
//     checkOut(): this {
//         // do checkout stuff here

//         if (this instanceof ChildrenBook)
//             console.log('Checking out a children book');

//         if (this instanceof ElectronicBook)
//             console.log('Checking out a electronic book');

//         return this;
//     }

//     checkIn(): this {
//         // do checking stuff here

//         if (this instanceof ChildrenBook)
//             console.log('Checking in a children book');

//         if (this instanceof ElectronicBook)
//             console.log('Checking in a electronic book');

//         return this;
//     }
// }

// class ChildrenBook extends LibraryBook {
//     clean(): this {
//         // do cleaning stuff
//         console.log('Cleaning a book');
//         return this;
//     }
// }

// class ElectronicBook extends LibraryBook {
//     removeFromCustomerDevice(): this {
//         // do removing stuff
//         console.log('Removing book from customer device');
//         return this;
//     }
// }

// let kidBook = new ChildrenBook();
// kidBook.checkIn()
//     .clean()
//     .checkOut();

// const electronicBook = new ElectronicBook();
// electronicBook.checkIn()
//     .removeFromCustomerDevice()
//     .checkOut();

/**
 * Declaration merging
 * -Module augmentation (see ./LibrarianExtension)
 */
// const librarianExtended = new UniversityLibrarian();
// librarianExtended.hostSeminar('Foo');
