package DataStructuresAndAlgorithms.EcommerceSearch;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        System.out.println("=== Linear Search ===");

        Product linearResult =
                LinearSearch.search(products, 104);

        if (linearResult != null) {
            linearResult.display();
        }

        System.out.println();

        System.out.println("=== Binary Search ===");

        Product binaryResult =
                BinarySearch.search(products, 104);

        if (binaryResult != null) {
            binaryResult.display();
        }
    }
}
