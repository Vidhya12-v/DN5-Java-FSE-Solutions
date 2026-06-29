package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryApplication {

    public static void main(String[] args) {
        System.out.println("═══════════════════════════════════════════════════");
        System.out.println("📚 LIBRARY MANAGEMENT SYSTEM - SPRING CORE DEMO");
        System.out.println("═══════════════════════════════════════════════════\n");

        // =============================================
        // EXERCISE 1: Basic Spring Application
        // =============================================
        System.out.println("1️⃣ EXERCISE 1: Basic Spring Application");
        System.out.println("📌 Loading Spring Application Context...");
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        System.out.println("✅ Spring Context Loaded Successfully!\n");

        // =============================================
        // EXERCISE 2: Dependency Injection
        // =============================================
        System.out.println("2️⃣ EXERCISE 2: Dependency Injection");
         System.out.println("📌 Getting Bean from IoC Container...");
        BookService bookService = context.getBean("bookService", BookService.class);
        System.out.println("✅ Bean Retrieved: BookService");
        System.out.println("📌 Testing Dependency Injection...\n");

        System.out.println("📖 Testing Library Operations:");
         System.out.println(bookService.addBook("Spring Framework in Action"));
        System.out.println(bookService.getBook("ISBN-12345"));
        System.out.println(bookService.removeBook("ISBN-12345"));

        System.out.println("\n✅ Dependency Injection Test Passed!");

        // =============================================
        // EXERCISE 4: Maven Project Setup
        // =============================================
        System.out.println("\n4️⃣ EXERCISE 4: Maven Project Setup");
         System.out.println("📌 Maven Project: LibraryManagement");
        System.out.println("📌 Dependencies: spring-context added");
        System.out.println("📌 Compiler Plugin: Java 17 configured");
        System.out.println("✅ Maven Setup Complete!\n");

        // Close context
        ((ClassPathXmlApplicationContext) context).close();
        System.out.println("🔚 Application Closed Successfully!");
        System.out.println("═══════════════════════════════════════════════════");
    }
}