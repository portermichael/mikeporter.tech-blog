---
layout: post
title: Simple Calculator
permalink: simple-calculator.html
tags: ['Portfolio']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple Calculator is the simple calculator for modern users. With an unkempt design and fewer buttons, simple calculator brings simple math to the modern age! (Warning! Simple Calculator was built to discuss code, it is not necessarily easier or simpler to use!)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Simple Calculator Code](https://github.com/portermichael/calculator){:target='_blank'}

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Simple Calculator](https://simple-calculator-mike.herokuapp.com/){:target='_blank'} is deployed on Heroku. (Dynos may take a few moments to spin up!)

![Simple Calculator](/../../images/portfolio/simpleCalculator.png)

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Simple Calculator was built for a job interview. It was built using Express.js and vanilla javascript. Numbers and operators are stored in an array. Simple calculator runs over the equation the first time solving for multiplication and division, then does a second run through solving for addition and subtraction. Overall, we look at an O(n) runtime, where n is the number of elements in the array.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I dropped the 0-9 digits we usually see, because I don't find them that helpful. Every calculator already has those digits. If we were really generating a calculator as a business, we would need to find a niche, and our niche isn't where everyone else is.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastly, Simple Calculator was built to discuss code. There are no bells and whistles. There are no bonus points for spending time on a project that doesn't net any additional value.
