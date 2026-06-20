package DesignPatterns.SingletonPattern;

public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        Logger logger3 = Logger.getInstance();
        logger3.log("Third message");

        System.out.println("Are all instances same? " + (logger1 == logger2 && logger2 == logger3));
    }
}
