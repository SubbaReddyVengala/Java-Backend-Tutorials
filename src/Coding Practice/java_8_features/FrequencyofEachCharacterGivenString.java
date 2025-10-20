package java_8_features;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FrequencyofEachCharacterGivenString {
    public static void main(String[] args) {
        String input = "Vengala Subba Reddy";
        Map<Character,Long> characterFrequency = input.chars()
                .filter(c->c!=' ')
                .mapToObj(c->(char) c)
                .collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));
        characterFrequency.forEach((character, frequency) ->
                System.out.println("'" + character + "' -> " + frequency));
    }
}
