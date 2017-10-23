---
layout: post
title: Clerkable
permalink: clerkable.html
tags: ['Portfolio']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clerkable is a video based product comparison tool built in Ruby on Rails.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Clerkable Code](https://github.com/portermichael/clerkable)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Navigate to Electronics then Streaming Devices to see full app functionality. It's hacky, but this is an older version with the best visuals. [Clerkable](https://clerkable.herokuapp.com/) is deployed on Heroku. (Dynos may take a few moments to spin up!)

![Clerkable]({{ '/images/portfolio/clerkable.png' | absolute_url }})

<!-- more -->

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Built in RoR with postgreSQL to maintain persistence. Using too many joins to construct complicated database architecture, this system required a LOT of caching! This version is from September of 2016. The latest version is from May of 2017. The 2017 version has more features, but needed some additional CSS work.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For ease of brows-ability Departments are related via an adjacency tree and contain Products. Products have several different Features broken down into sub-features used for comparison. In the 2017 version, critics were included to rate products, and they drive the features. A store and authentication were also added.
