package DataStructuresAndAlgorithms.FinancialForecasting;

public class FinancialForecast {

    public static double predictFutureValue(
            double currentValue,
            double[] growthRates,
            int year) {

        if (year == growthRates.length) {
            return currentValue;
        }

        currentValue =
                currentValue * (1 + growthRates[year]);

        return predictFutureValue(
                currentValue,
                growthRates,
                year + 1);
    }
}