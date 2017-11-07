---
layout: post
title: Reduce Is The Best Function (in Javascript)
category: Functional-Programming
permalink: reduce-is-the-best-function.html
tags: ['Javascript']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Functional Programming is a programming style. It focuses on clarity and maintainability when programming. In this way we focus on the human involvement in programming and choose to save developer time. The main focus is on creating well name pure functions, of which, reduce is my favorite.

<!-- more -->

### Functional programming

Functional programming avoids changing the state of the original input in a function<sup>1</sup>. So if we have an array, and we call a function to act on this array, we are not modifying the original array. We are instead creating a new array and applying the results of the function to our new array. Functions that don't modify the input, are immutable or Pure. These functions are the bread and butter of functional programming.

The knife that spreads that bread and butter is great naming convention. We want our names to be clear so that future us and future other developers who see our code, understand what our functions are doing without having to read into the code too heavily.

An example would be min. min when called on an array, gives you the smallest value in the array. But it doesn't modify the original array. And when you see min, you might think minimize, minimalist, or smallest.

### Reduce

If you read about reduce, you'll often see it with map and filter. These are often bound and learned about together in many languages including Javascript and Python. But the truth is, reduce can do the work of both map and filter. In Rails, we only have reduce and map built in. (We still use map and filter. We want to be clear in our actions during functional programming too.)

#### How Reduce Works
