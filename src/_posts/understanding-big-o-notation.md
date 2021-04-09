---
title: "Understanding Big O Notation"
date: "2021-04-10"
tags: ["algorithms/data_structures"]
summary: "Understanding the basics of Big O Notation"
---

_Big O Notation_ is used to analyze the efficiency of an algorithm by the time and space it takes to execute.

According to [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation):

> In computer science, big O notation is used to classify algorithms according to how their run time or space requirements grow as the input size grows.

So, in Big O Notation, when an algorithm takes too much time and memory to run, that makes it the worst case scenario, and the less time and memory makes the best case scenario.

The Big O notation types, or _Time complexity_, that we are going to see here are:

1. Constant - O(1)
2. Linear - O(n)
3. Exponencial/Quadratic - O(n^2)
4. Logarithmic - O(log n)

---

## Constant

A constant notation takes the same amount of time and memory, doesn't matter how many inputs are given.

Just like the code below...

```js
function printArray(array) {
    console.log(array[0]);
    console.log(array[array.length - 1]);
}

printArray([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
]);
```

In the code above we are printing the first and last value of an array, which are performed instantly and takes the same time, doesn't matter how many values are in the array

The notation of this operation is symbolized by **O(1)**, which can be called by big O of 1, or constant time.

---

## Linear

A time complexity is linear when the time and space increase in the same order the number os inputs increase.

That's what you can see in the code below.

```js
function loopArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

loopArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

In the code above, we are looping through an array, which takes more time depending on how much large the array is.

The notation of this operation is _O(n)_

---

## Exponencial/Quadratic

The exponencial time complexity has its time and space equal to the n^2(Number of inputs to the square).

An example of a quadratic time complexity is when we are looping 2 times over an array.

```js
        function 2DArray(array) {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    console.log(array[i][j])
                }
            }
        }

        2DArray([
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]
        ])
```

In the example above we are looping through a 2-dimentional Array, that is, we are looping through each array inside the array.

The notation of this time complexity is O(n x n), or O(n^2).

---

## Logarithmic

A logarithmic notation, like O(log n), is pretty common in **Divide and conquer** types of algorithms. An example is an algorithm that searches a name in a list sorted alphabetically. We start at the middle, and, if the name starts with a letter greater than the one we found, we discard the ones that are lower and just search through the right half.

The algorithm described above is called **Binary search**, and below are a binary search code.

```js
function binarySearch(array, target) {
    let leftSide = 0;
    let rightSide = array.length - 1;

    while (leftSide <= rightSide) {
        let middle = Math.floor((leftSide + rightSide) / 2);

        if (array[middle] > target) {
            rightSide = middle - 1;
        } else if (array[middle] < target) {
            leftSide = middle + 1;
        } else {
            return middle;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
```

In the above code, we are looping through an array and printing the index of the target value, and if the value doesn't exist in the array we print **-1**.

A prerequisite to perform a binary search is that the array must be **sorted**, so we'll be able to see if the target is on the right side by checking if he is greater than the value at the middle, and perform the contrary if it is in the left side.

The time/space complexity of this operation is symbolized by _O(log n)_.

Below are a graph to better visualize the efficiency of each Big O Notation.

![BigO graph](/static/images/blog/understanding-big-o-notation/bigo-graph.png)

_The most inclined is the worst case scenario_
