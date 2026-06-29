package com.library;

public class BookRepository {

    public String saveBook(String bookName) {
        System.out.println("📚 [BookRepository] Saving book: " + bookName);
        return "Book '" + bookName + "' saved successfully!";
    }

    public String findBook(String id) {
        System.out.println("🔍 [BookRepository] Searching for book ID: " + id);
        return "Book found with ID: " + id;
    }

    public String deleteBook(String id) {
        System.out.println("🗑️ [BookRepository] Deleting book ID: " + id);
        return "Book with ID: " + id + " deleted";
    }
}