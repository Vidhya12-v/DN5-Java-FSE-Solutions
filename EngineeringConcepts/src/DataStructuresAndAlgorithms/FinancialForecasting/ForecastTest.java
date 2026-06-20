package DataStructuresAndAlgorithms.FinancialForecasting;

public class ForecastTest {

    public static void main(String[] args) {

        double currentValue = 10000;

        double[] growthRates = {
                0.10,
                0.12,
                0.08
        };

        double futureValue =
                FinancialForecast.predictFutureValue(
                        currentValue,
                        growthRates,
                        0);

        System.out.println("=================================");
        System.out.println("FINANCIAL FORECASTING TOOL");
        System.out.println("=================================");

        System.out.println("Current Value : " + currentValue);

        System.out.println("\nGrowth Rates:");

        for(double rate : growthRates)
        {
            System.out.println((rate * 100) + "%");
        }

        System.out.println("\nPredicted Future Value : "
                + futureValue);

        System.out.println("=================================");
    }
}