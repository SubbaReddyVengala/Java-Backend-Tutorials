package java_8_features;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ReverseList {
    public static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,3,4,5,6);

        List<Integer> reverseList = IntStream
                .range(0,list.size())
                .mapToObj(i->(list.size()-i))
                .collect(Collectors.toList());
        System.out.println("Reversed List: " + reverseList);
    }
}
