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

This is a bit of a sticky step.
