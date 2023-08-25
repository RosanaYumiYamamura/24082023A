//Enunciado:
//Imagina que estás desarrollando un sistema de gestión de una biblioteca que mantiene un registro de libros. Cada libro tiene un título, un autor y un estado (disponible o prestado). Diseña una clase Book que encapsule esta información y proporcione métodos para gestionar el estado del libro. Libro y autor se integran por el mecanismo de composición. 

class Author {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    getName(): string {
      return this.name;
    }
  }
  
  enum BookStatus {
    Available = "available",
    Lent = "lent",
  }
  
  class Book {
    private title: string;
    private author: Author;
    private status: BookStatus;
  
    constructor(title: string, author: Author) {
      this.title = title;
      this.author = author;
      this.status = BookStatus.Available;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): Author {
      return this.author;
    }
  
    getStatus(): BookStatus {
      return this.status;
    }
  
    borrowBook(): void {
      if (this.status === BookStatus.Available) {
        this.status = BookStatus.Lent;
        console.log(`Book "${this.title}" by ${this.author.getName()} has been borrowed.`);
      } else {
        console.log(`Book "${this.title}" is not available for borrowing.`);
      }
    }
  
    returnBook(): void {
      if (this.status === BookStatus.Lent) {
        this.status = BookStatus.Available;
        console.log(`Book "${this.title}" by ${this.author.getName()} has been returned.`);
      } else {
        console.log(`Book "${this.title}" cannot be returned as it is not lent.`);
      }
    }
  }
  
  // Crear instancia de Author
  const author = new Author("J.K. Rowling");
  
  // Crear instancia de Book
  const book = new Book("Harry Potter and the Sorcerer's Stone", author);
  
  // Ejemplo de uso
  console.log(`Title: ${book.getTitle()}`);
  console.log(`Author: ${book.getAuthor().getName()}`);
  console.log(`Status: ${book.getStatus()}`);
  
  book.borrowBook();
  console.log(`Status after borrowing: ${book.getStatus()}`);
  
  book.returnBook();
  console.log(`Status after returning: ${book.getStatus()}`);
  