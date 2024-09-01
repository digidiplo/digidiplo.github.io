## Asymptotic Notation

This is a way to describe behaviour of an algorithm as the input size grows. It gives a high-level understanding of an algorithm's efficiency, focussing on growth rate rather than specific implementation details or constant factors. 

In other words, it is like estimating how long as task will take, depending on the size of the job. It's like understanding how different factors affect the time it takes to finish.

## Time vs Space Complexity
- "time" refers to the amount of computational time that an algorithm takes to execute.
- "space" is the amount of memory it needs to complete its operation.
- the *spice-time tradeoff* - time and space are often at odds with each other - making an algorithm quicker often requires more space, and vice versa.

## How to calculate complexity
- involves counting the operations/steps an algorithm takes in function of the size of its input.

## Key types

1. **Big O (O).** Describes the *upper bound* of an algorithm's runtime. Tells you the worst-case senario for how long an algorithm will take, no matter what.
2. **Big Theta.** Provides a *tight bound* on the runtime algorithm, telling you the upper and lower bounds. This is useful when you want a more precise understanding of an algorithm's performace. The exact pace of your algorithm under normal conditions.
3. **Big Omega.** Describes the *lower bound* of a runtime. Less commonly used that Big O because worst-case is more critical to consider.

# Common runtimes
Range from efficint (O(1)) to extremely inefficient (O(n!)), giving a sense of which algorithms are practical for different inputs sizes. 

1. **Constant time (O(1)).** The runtime does not change with the size of the input - algorithm always takes the same amount of time. 
2. **Logarithmic Time (O(log n)).** Runtime grows logarithmically as the input size increases. e.g. in phone book, start in the middle then choose first or second half - you're cutting the problem into pieces. 
3. **Linear Time (O(n)).** Like going through a shopping list item by item, the more items the longer it will take. 
4. **Polynomial Time (O(n^k)).** Like running a tournament, as you add more player, the number of matches increase. The task gets harder must faster as the job gets bigger.
5. **Exponential Time (O(2^n)).** The task grows out of control fast as the job gets bigger, making it impossible to handle at scales.
6. **Factorial Time (O(n!)).** The task becomes overwhelmingly difficult very quickly as the job grows, making it even slower than expotential time. 