package com.library;

public class BookService {

    private BookRepository bookRepository;

    // Exercise 7: Constructor Injection
    public BookService(BookRepository bookRepository) {
        System.out.println("🏗️ [Constructor Injection] BookService created with BookRepository");
        this.bookRepository = bookRepository;
    }

    // Exercise 2 & 7: Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("🔧 [Setter Injection] BookRepository set into BookService");
        this.bookRepository = bookRepository;
    }

    public String addBook(String bookName) {
        System.out.println("📖 [BookService] Adding book: " + bookName);
        return bookRepository.saveBook(bookName);
    }

    public String getBook(String id) {
        System.out.println("📖 [BookService] Getting book: " + id);
        return bookRepository.findBook(id);
    }

    public String removeBook(String id) {
        System.out.println("📖 [BookService] Removing book: " + id);
        return bookRepository.deleteBook(id);
    }
}