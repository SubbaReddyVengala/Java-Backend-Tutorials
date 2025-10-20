package java_8_features.interview;

import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FrequencyofCharacterInString {
    public static void main(String[] args) {
        String input = "vengala subba reddy";
        Map<Character,Long> characterFrequency = input.chars()
                .filter(c -> c!=' ') // ignores space
                .mapToObj(c-> (char) c)
                .collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));

        // Step 3: Display the frequency of each character
        characterFrequency.forEach((character, frequency) ->
                System.out.println("'" + character + "' -> " + frequency));
    }
}
