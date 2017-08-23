---
layout: post
title: Jekyll is Great for Static Applications
category: Jekyll
permalink: why-use-jekyll
tag: ['Jekyll', 'Career']
author: Michael Porter
---

Jekyll is a static site generator written in Ruby. It's best used for applications where the majority of the site doesn't change regularly<sup>1</sup>. It takes in content like templates and your content written in markdown, and assembles that content into a static application. The assembled application is what gets put on the web. Using this method we can take advantage of some good paradigm of programming<sup>2</sup> to easily and rapidly make changes or updates to our application.

<!-- more -->

### The Pros


#### Fast

Jekyll is very minimalistic and efficient. It only has what you need to generate a basic static site. Because there is no communication between databases, it's like our data has all already been cached.

Jekyll does take some time to put together the package of templates, markdown and plugins that make up an application. We do that on our end once each time we make changes and view or deploy it.

#### Cheap

We are fast, so we can handle requests faster than a server querying a database. This means we can operate on a cheaper server, or have less server "on time". We also aren't receiving data to put in a database, so we should have a smaller bandwidth footprint.

#### Secure

Without moving parts, there isn't a lot that can break. We don't have a database or form inputs that can get compromised. Jekyll mostly exists as just some HTML and CSS, which is very secure.

#### Plugins

Modern applications might want more advanced functionality, like commenting, a photo loading interface or some interaction with a database. We can use plugins to fill in those gaps to an extent.

### The Cons

I consider these inconveniences inherent in the type of framework Jekyll is, but with enough inconveniences, we have a bad choice and should choose a different tool.

#### Media Inconvenient

Photos and media have to be inserted manually. With some sites like Wordpress, there is a nice interface to easily add media data. Jekyll doesn't have that, so if we've got a dozen photos per post, it might be a good idea to consider something else or research a plugin to help.

#### SEO Optimization Wonky

SEO optimization generally has to be done manually. SEO optimization gets webapp pages hitting higher on unpaid search results. There are a lot of factors to take into consideration, but generally optimization relies on good keywords, inter-application cross-linking and easy social network sharing. We can use plugins to help fill those gaps. [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag) is a nice tool to help. We could also include some social network sharing buttons.

#### Security Issues Possible

Jekyll is very secure, but our plugins might cause security issues. Remember to regularly update plugins and use plugins that get regularly updated.

### The Competition

###### Wordpress

Today, the biggest webapp tool is definitely Wordpress. A lot of folks knock it for resource use, but it's huge strength is interface. Anyone can easily create a website on Wordpress with virtually no programming knowledge. Additionally, the more difficult to do things like handling database log-ins and transactions can be done with plugins. It's really easy to use and you can find a TON of sites that use Wordpress like The New York Times.

Wordpress works out of a browser and it has a simple editing system, but it is slower, more prone to crashes and MUST be continuously updated. Security holes in plugins are constantly being found and updated. Because of these security holes, and Wordpress's popularity malware is prevalent.

#### Alternative Popular Static Site Generators

Middleman - Also built in Ruby, but smaller than Jekyll. Some major websites use Middleman.

Roots - Node.js based, built by Carrot which is a subsidiary of the Vice Media Group.

Hugo - Written in GO. A lot of people like GO.


### What to Choose?

If you are having trouble choosing a static site generator and don't have any coding experience I'd pick Wordpress. It's more important to get started, than spending significant time researching for very small gains. The larger frameworks also have more tutorials, guides, plug-ins and overall resources at your disposal.

If you do have skill in Node.js, GO or another language you should definitely use the static site generator in that language. With a quick google search you can find a framework that supports your language of choice.

##### Footnotes:

1. Every time a static site is updated, it's taken down for a few minutes. We'll define regularly as a few times per day. If you need a hard cap, let's say more than 4 times a day, either proofread more or move to something with a database.

2. Paradigm of programming includes concepts like DRY - Don't repeat yourself. If you are repeating yourself over several sections, and you decide to make a change, you now have to make this change over several sections. This is both error prone (typos) and time consuming.
