package java_8_features;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

//Java 8 Program to Retrieve Last Element of a List of Strings
public class RetrieveLastElement {
    public static void main(String[] args) {
        // Creating a list of strings
        List<String> strings = Arrays.asList("Java", "Python", "C++", "JavaScript", "Ruby");

        // Using Java 8 Streams to retrieve the last element
        Optional<String> lastElement = strings.stream()
                .reduce((first,second)-> second);
        // Displaying the last element
        lastElement.ifPresent(element -> System.out.println("The last element is: " + element));
    }
}
