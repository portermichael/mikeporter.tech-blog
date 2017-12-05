---
layout: post
title: Logging into Gmail and Security Concerns
category: Security
permalink: logging-into-gmail.html
tags: ['Javascript']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I had been out of town recently and some friends had watched our dog, so we owe them dinner. These friends also took some pictures for us recently, so now we owe them double time! We had them over and they started talking about a podcast that was all about spearfishing. That is targeting a user to compromise their credentials. Well anyway, it came up that they don't understand how the internet works.  Namely what happens when you google a website. This is a blog dedicated to beginners, so I thought I'd try and address this situation with a single simple diagram, and maybe a second more complicated one for those of us who are in or learning the field.

<!-- more -->

### Functional programming

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Functional programming avoids changing the state of the original input in a function<sup>1</sup>. So if we have an array, and we call a function to act on this array, we are not modifying the original array. We are instead creating a new array and applying the results of the function to our new array. Functions that don't modify the input, are immutable or Pure. These functions are the bread and butter of functional programming.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The knife that spreads that bread and butter is great naming convention. We want our names to be clear so that future us and future other developers who see our code, understand what our functions are doing without having to read into the code too heavily.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An example would be min. min when called on an array, gives you the smallest value in the array. But it doesn't modify the original array. And when you see min, you might think minimize, minimalist, or smallest.

### Reduce

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you read about reduce, you'll often see it with map and filter. These are often bound and learned about together in many languages including Javascript and Python. But the truth is, reduce can do the work of both map and filter. In Rails, we only have reduce and map built in. (We still use map and filter. We want to be clear in our actions during functional programming too.)

#### How Reduce Works

#### Regular and Boring

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b) applies a function to an array. Traditionally it simplifies our array to a single value by acting on every element in the array. In that way it works like:

>   myArray = [0, 1, 2, 3, 4]

>   sumValues = (acc, cur) => return acc + cur;

>   // acc is our accumulator, cur is our current value

>   myArray.reduce(sumValues)

>   // expected output is 10

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When reduce is used this way, it takes the first value in the array (0), which goes in the acc spot, and adds it to the second value in the array (1), which goes in the cur spot, to return (1). (1) then goes in the acc spot, (2) goes in the cur spot, we add them, to return (3). And we continue with this pattern until we iterate or enumerate through the whole array.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now this is cool and all, but the beauty of reduce is when you apply an initial value.

#### A Little Cool, but Mom isn't Impressed

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;See reduce doesn't just look like:

>  myArray.reduce((acc, cur) => return acc + cur)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It actually looks like:

>  myArray.reduce((acc, cur, index, array) => {return acc + cur}, initialValue)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index is the index we start at in the array. It defaults to the first value, but we can set it to any.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array refers to the array we are acting on. In this case, myArray.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;initialValue is the initial value we provide to the array. It is what goes the acc the first time.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It's ok if we add a value.

>   myArray = [0, 1, 2, 3, 4]

>   sumValues = (acc, cur) => {return acc + cur}

>   // acc is our accumulator, cur is our current value

>   myArray.reduce(sumValues, 10)

>   // expected output is 20 now

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Now we are using our initial value, (10), to start with in the acc spot and (0) in the cur spot, returning (10). We continue, with (10) in the acc spot again, and (1) in the cur spot, returning (11). (11) goes in the acc spot, (2) in the cur spot, and we return (13) and so on.

#### The Coolest

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When we get really sick though, is by applying an initial value that is an object. And then in our function, manipulate value in that object.

#### An Array as an Initial Value

>   myArray = [0, 1, 2, 3, 4]

>   doubles = (acc, cur) => {return acc.push(cur*2)}

>   myArray.reduce(sumValues, [])

>   // expected output is [0, 2, 4, 6, 8] now

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're doing the same thing as before. Our initial value ([]) goes in the acc spot, our first element from myArray (0) goes in the cur spot, but our function is a little different now. We are pushing values from the original array into our initial array and doubling them. We then continue by passing in [0] in the acc spot, and (1) in the cur spot, returning [0, 2], and so on until we finish.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We can get a little spicier though by flattening an array of arrays.

>   myArray = [[0, 1], [2, 3], [4]]

>   flatten = (acc, cur) => {return acc.concat(cur)}

>   myArray.reduce(sumValues, [])

>   // expected output is [0, 1, 2, 3, 4] now

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're still doing the same thing. We're applying our initial value ([]) to the acc spot, and our first element from myArray([0, 1]) goes in the cur spot. We return [0, 1] because that's the way .concat works when called on an array with an array as an argument. We apply our new [0, 1] to the acc spot, and [2, 3] to the cur spot, returning [0, 1, 2, 3] and continue until we finish.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is actually the preferred way to flatten an array.

#### Ultimate Spice Flavor

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We hit the big concepts covering how we can use reduce. But we can get SPICIER!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What if we use an object?

>   myArray = [0, 1, 2, 3, 4]

>   setify = (acc, cur) => {return acc[cur] = 'present'}

>   myArray.reduce(sumValues, {})

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That above code creates an object with the keys that were the various elements in an array. It even removes duplicates like a Set!
