---
layout: post
title: What is Jekyll Good for?
category: Jekyll
permalink: what-is-jekyll-good-for.html
tag: []
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll is great for static applications. Jekyll is a static site generator written in Ruby. It's best used for applications where the majority of the site doesn't change regularly<sup>1</sup>. It takes in templates, applies content written in markdown, and assembles it all into a static application. The assembled application is what gets put on the web. Using this method we can take advantage of some good paradigm of programming<sup>2</sup> to easily and rapidly make changes or updates to our application.

<!-- more -->

### The Pros

#### It's Fast

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll is very minimalistic and efficient. It only has what you need to generate a basic static site. There is no communication between databases. It's like our data has all already been cached.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll does take some time to put together the package of templates, markdown and plugins that make up an application. We do that on our end once each time we make changes and view or deploy it. But because we developers do it once before deployment, it's fast for our users.

#### It's Cheap

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll is fast, so we can handle requests faster than a server querying a database. We can use a cheaper server that provides less resources because we require fewer resources. This in turn costs less.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We aren't receiving data to put in a database either, so we should have a smaller bandwidth footprint, which also costs less.

#### It's Secure

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Without moving parts, there isn't a lot that can break. We don't have a database or form inputs that can get compromised. Jekyll mostly exists as just some HTML and CSS, which is very secure.

### The Cons

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I consider these inconveniences inherent in the type of framework we choose. All frameworks and tools have inconveniences, but with enough inconveniences, we have a bad choice and should choose a different tool.

#### Plugins

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Modern applications desire more advanced functionality. Commenting, a photo loading interface or some interaction with a database are desirable. We must use plugins to fill in those gaps to an extent.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plugins are extra code that generally negates all our pros. They slow us down, require more resources and are not as secure. If as a developer, you require many plugins, it would be best to switch to a framework that has database features incorporated.

#### Media Inconvenient

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Photos and media have to be inserted manually. With some sites like Wordpress, there is a nice interface to easily add media data. Jekyll doesn't have that, so if we've got a dozen photos per post, it might be a good idea to consider another framework or plugin to help.

#### SEO Optimization Wonky

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SEO optimization generally has to be done manually. SEO optimization gets webapp pages hitting higher on unpaid search results. There are a lot of factors to take into consideration, but generally optimization relies on good keywords, inter-application cross-linking and easy social network sharing. We can use plugins to help fill those gaps. [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag){:target='_blank'} is a nice tool to help. We could also include some social network sharing buttons that auto open the logged in user to the specific social networks share page.

#### Potential Security Issues

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll is very secure, but our plugins might cause security issues. Remember to regularly update plugins and only use plugins that get regularly updated.

### The Competition

#### Wordpress

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Today, the biggest webapp tool is definitely Wordpress. A lot of folks knock it for resource use, but it's huge strength is interface. Anyone can easily create a website on Wordpress with virtually no programming knowledge. Additionally, the more difficult to do things like handling database log-ins and transactions can be done with plugins. It's really easy to use and you can find a [TON](http://www.wpbeginner.com/showcase/40-most-notable-big-name-brands-that-are-using-wordpress/){:target='_blank'} of sites that use Wordpress. Although recently one of their most notable users, [The New York Times](https://open.nytimes.com/react-relay-and-graphql-under-the-hood-of-the-times-website-redesign-22fb62ea9764){:target='_blank'} has moved away from it.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wordpress works out of a browser and it has a simple editing system, but it is slower, more prone to crashes and MUST be continuously updated. Security holes in plugins are constantly being found and updated. Because of these security holes, and Wordpress's popularity malware is prevalent.

#### Alternative Popular Static Site Generators

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Middleman - Also built in Ruby, but smaller than Jekyll. Some major websites use Middleman.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Roots - Node.js based, built by Carrot which is a subsidiary of the Vice Media Group.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hugo - Written in GO. A lot of people like GO. These people probably like Hugo too.


### What to Choose?

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you are having trouble choosing a static site generator and I'd pick Wordpress. It's more important to get started, than spend a significant time on the fence. The larger frameworks also have more tutorials, guides, plug-ins and overall resources at your disposal.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you do have skill in Node.js, GO or another language you should definitely use the static site generator in that language. With a quick google search you can find a framework that supports your language of choice.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I chose Jekyll because I wanted to try out a static site generator and am familiar with Ruby. I considered something with more bells and whistles, but valued speed and price most.

#### Footnotes:

1. Every time a static site is updated, it's taken down for a few moments. It used to be minutes, but now it looks like seconds, if even that long. For me, this downtime doesn't matter.

2. Paradigms of programming includes concepts like DRY - Don't repeat yourself. If you are repeating yourself over several sections, and you decide to make a change, you now have to make this change over several sections. This is both error prone (typos) and time consuming.
