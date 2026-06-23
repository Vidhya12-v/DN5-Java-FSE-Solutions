package LoggingExercises;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingLevelsExample {

    private static final Logger logger =
            LoggerFactory.getLogger(LoggingLevelsExample.class);

    public static void main(String[] args) {

        logger.info("Application started");

        logger.warn("Warning: Invalid input detected");

        logger.error("Error: Unable to process request");

        logger.info("Application finished");
    }
}