---
layout: post
title: Functional Programming in Practice (Outlining the Solution) Part 2
category: Functional-Programming
permalink: functional-programming-in-practice-part-2.html
tags: ['Javascript']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We talked a bit about functional programming previously, but I thought an example would be helpful.  It's a great chance to discuss a problem, break it down and rationalize the decisions we make. When we have the opportunity to do this in a group, we get to do it even better!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this fictional problem land, we want to interpret CSS hexidecimal colors, ('#ffa300') as base 10 integers of their 32 bits. But we can't use parseInt() or similar functions. Additionally, CSS colors are typically written RGB, but we want our base10 integer to be read BGR. We also need to validate our string, and throw an error when it is incorruptible. Additionally, the string '#f0a' is equivalent in CSS to '#ff00aa', so receive that as valid input.

<!-- more -->

### Examples!!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We need examples. We can read the description over and over again, but examples can help us wrap our brain around it and understand what is going on. Once we understand the task, we can expand our example list and break down the problem.

```

#F00 -> 255
#800080 -> 8388736
#ffa500 -> 42495
oops -> throw error

```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This looks cool and all, but how is this logic working? When I solved this I went to a [math site](https://www.mathsisfun.com/binary-decimal-hexadecimal-converter.html) and just played with the numbers for a few minutes.

#### Understanding the Examples

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The big hint we can get is that hexidecimal FF is equal to 255 and hex 80 is equal to 128.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;But how do we get there? Well first we break the group the hexes into pairs of two, like they are interpreted in CSS colors. Then we re-arrange their binary and translate them into base 10.

```

#F00 -> FF-00-00 -> '"255"-"0"-"0"' -> '"11111111"-"00000000"-"00000000"'
-> '"00000000"-"00000000"-"11111111"' -> 255

```


```

'#800080' -> '80-00-80' -> '"128"-"0"-"128"' -> '"10000000"-"00000000"-"10000000"'
-> '"10000000"-"00000000"-"10000000"' -> 8388736

```

#### Expanding the Example List

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now that we understand the logic, we can add a few more examples and consider edge cases.

```

'#3ff' -> 16777011
'#aAf' -> 16755370
'#fA00c3' -> 12779770

```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our users only interact by submitting a string, so all our edge cases should be invalid strings.

```

Edge Cases:

// No hash
'fFfF' -> error

// Wrong length too short
'#00' -> error

// Wrong length too long
'#abcdef1' -> error

// Wrong length between 4 and 7
'#abcde' -> error

// Not valid hex
'#gabcde' -> error

// Handle capitalization
'#AD1F3C' -> valid

// Handle mixed capitalization
'#Ad1F3c' -> valid

// Not valid hex with capitalization
'#AGBCDE' -> error

// Not valid hex with mixed capitalization
'#gACBdE' -> error

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It might seem a bit overkill, but I think it's better to come up with our all the test cases we can think of right away. It ensures our understanding of the problem and can save us time during testing.

### Breaking Down the Problem

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We want to fail fast. When a user gives a bad input, we want to give feedback right away. So that should be our starting point.

1. String validation.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can now move onto handling functionality. We want think what are the steps going on here:

```

'#F00' -> 'FF-00-00' -> '"255"-"0"-"0"' -> '"11111111"-"00000000"-"00000000"'
-> '"00000000"-"00000000"-"11111111"' -> 255

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;From here, we want to handle the data the same way.  '#f0a', '#ff00aa' and '#ca34fd' are all valid inputs. We don't want to write code dealing with 4 character strings and 7 character strings. So we're going to expand the short (4 character) CSS strings into long (7 character) strings. Then we can write all the following code to just handle our long strings.

1. String validation.
2. Expand short inputs.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now that all our inputs are valid and have the same structure. We want to translate our hexes into bits. I went from hex to decimal to bit, but that's for our clarity. In the actual code, we just want to go hex to bit.

1. String validation.
2. Expand short inputs.
3. Hex to Bits.

```

'#F00' -> 'FF-00-00' -> '"255"-"0"-"0"' -> '"11111111"-"00000000"-"00000000"'
-> '"00000000"-"00000000"-"11111111"' -> 255

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we look at the example, you'll notice that somewhere we dropped the '#'. We don't want to keep dealing with this extra data, so let's drop it early.

1. String validation.
2. Expand short inputs.
3. Drop Hash.
4. Hex to Bits.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We also did a re-arrangement of position.

1. String validation.
2. Expand short inputs.
3. Drop Hash.
4. Hex to Bits.
5. Re-arrange positions.

```

'#F00' -> 'FF-00-00' -> '"255"-"0"-"0"' -> '"11111111"-"00000000"-"00000000"'
-> '"00000000"-"00000000"-"11111111"' -> 255

```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then lastly we translated our bits into base 10 decimal.

1. String validation.
2. Expand short inputs.
3. Drop Hash.
4. Hex to Bits.
5. Re-arrange positions.
5. Bits to Decimal.

### Next Steps

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've made some good breakdown progress and we should feel good about it. We can write individual functions to handle each of these tasks, and break down the more complicated aspects of those functions. Writing it down like this, it takes time and effort, but we'll never make a mistake. Our code will be logical, sound and without bugs.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is the first time I've gone into so much depth thinking and explaining a problem. I do a lot of this, but a lot of it is in my head, and I see the value writing it out. It's very similar to test driven development, in that we write code very logically one piece at a time to solve one problem.
