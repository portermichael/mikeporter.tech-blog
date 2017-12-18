---
layout: post
title: Functional Programming in Practice (Outlining the Solution) Part 2
category: Functional-Programming
permalink: functional-programming-in-practice-part-2.html
tags: ['Javascript']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're going to take the problem we broke down previously, and outline or pseudocode how we are going to solve it now. This is a great way to think about the big picture of a multi-step problem and get our ideas on paper. I also conceptually think about optimization at this step, but I've found it's hard to communicate that idea to others this early.

<!-- more -->

### Recap

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this fictional problem land, we want to interpret CSS hexidecimal colors, ('#ffa300') as base 10 integers of their 32 bits. But we can't use parseInt() or similar functions. Additionally, CSS colors are typically written RGB, but we want our base10 integer to be read BGR. We also need to validate our string, and throw an error when it is incorruptible. Additionally, the string '#f0a' is equivalent in CSS to '#ff00aa', so receive that as valid input.

1. String validation.
2. Expand short inputs.
3. Drop Hash.
4. Hex to Bits.
5. Re-arrange positions.
6. Bits to Decimal.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```


### Pseudocode

Pseudocode is shorthand notation for the idea or action you want to take without the syntax. An example would be if we want to split a string based on a complicated regular expression. Instead of actually writing the regular expression we want to make sure our idea is solid. This saves us some time if we find that say splitting this string based on the regular expression isn't the best solution.

```
// an example
string = declarationOfIndependence;
string.split(/complicatedRegEx/)
// get an array with appropriate values
```

To pseudocode, we'll break each step down and attempt them one at a time. Then we'll look at our overall solution and think about potential optimizations, check our naming conventions and coding practices.

#### String validation

1. String validation.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```

We want to validate our input. This includes string length, that our string is pre-pended by a '#' and that our string is a hexadecimal.

One option break these into separate functions, but since they are so closely related, we'll keep them in a single function. We have a bit more

```
//input string
inputValidation (string)
  check # is first
  check string is 4 or 7 characters
  lowercase all letters
  check all characters are hexadecimal
  if invalid throw error
// no output if not invalid
```

Pretty easy peasy!

#### Expand short inputs

2. Expand short inputs.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```

```
// input short string
when input is 4 length string
doubleShort (shortinput)
  iterate over short, copy # and copy F,0 and 0 twice
// output is a 7 length string
```

#### Drop the Hash

3. Drop Hash.

This is a tricky one. We can actually drop the hash in it's own function. It would leave us a very small function, or we could drop it inside another function. If we do it inside another function, we aren't being as clear with our actions. We'll go ahead and opt for a very small function. This is functional programming afterall. But I've always been of the mindset that if you can defend your style logically, then go ahead and do whichever you prefer. In this case I think both options are valid.


```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```
```
//input 7 character string
dropHash(string)
  remove hash
// output is a 6 character string
```

#### Hex to Bits

4. Hex to Bits.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```

This is the hardest step. We want to convert hex values to bits. Let's try out a plan.

```
//input 6 character string
hexToBits(string)
  For each character in the string, decrement the hex value until you reach 0
    every time we do add one bit value to the current position
      when the bit value = 2, add 1 bit value to the higher value and change current to 0
  // example: f = 15, our binary result is [1,1,1,1]
//output array of bit values stored in an array
```


But how do we decrement a hex value? Javascript doesn't have good ways to do any math on a hex value. But we can convert our hex to a base 10 value, then decrement that base 10 value. Additionally our data is going into this as a string. Strings in Javascript are immutable, so if we are converting values, a string might not be our best data structure. An array is probably better. We can store values in it and it has many characteristics in common with a string.

But where do we put this function? We want our functions to do one thing and be declarative based on the name. When we read it, we want to instantly know the programmers intention. I see three choices:

1. Write a small function that converts a hex to a base 10 array.
2. Merge our drop hex function with this convert hex to base 10 function.
3. In hex to bits, take in a string, convert it to base 10, then output an array.

I like the clarity in option 1. But any choice that is defensible is valid.

```
// input 6 character string
hexToBase10 (string)
  convert hex to base 10
// output array of length 6
```
```
//input 6 length array
base10ToBits(array)
  For each character in the string, decrement the hex value until you reach 0
    every time we do add one bit value to the current position
      when the bit value = 2, add 1 bit value to the higher value and change current to 0
  // example: f = 15, our binary result is [1,1,1,1]
// output array of bit values stored in an array,
// array of length 6 with each element consisting of an array of length 4
```

#### Re-arrange positions

5. Re-arrange positions.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```
```
// input array of length 6 with each element consisting of an array of length 4
rgbTobgr (arrayOfArrays)
  swap positions of pairs 0 and 1 with 4 and 5
// output is array of length 6 with each element consisting of an array of length 4
```

#### Bits to Decimal

6. Bits to Decimal.

```
1) #F00 -> 2/3) FF-00-00 -> 255-0-0 -> 4) 11111111-00000000-00000000
-> 5) 00000000-00000000-11111111 -> 6) 255
```
```
// input is array of length 6 with each element consisting of an array of length 4
bitsToDecimal (arrayOfArrays)
  iterate through array, call 2 to the power of x as we iterate
    add the value to a total
// output is base 10 digits
```
