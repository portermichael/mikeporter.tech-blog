---
layout: post
title: Installing and Serving a Jekyll App
category: Jekyll
permalink: installing-and-serving-a-jekyll-app
tag: ['Jekyll', 'Career', 'HowTo']
author: Michael Porter
---

This is more of a collection of links and directions than a step by step guide. I find it's much easier to work once you know where the resources are. They are also already so well written, why repeat it?

<!-- more -->

### Install Ruby

These are the directions I used to install Ruby (and Ruby on Rails) the [first time](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi2y4a_1-7VAhUHrFQKHfrLARQQFggmMAA&url=http%3A%2F%2Frailsapps.github.io%2Finstallrubyonrails-ubuntu.html&usg=AFQjCNHKle1jf5eCRlbmR1OQ7wIp0jIj_Q). Ruby on Rails is not needed for Jekyll. They are two different frameworks/libraries.

Ruby has a some great step-by-step instructions at the [Ruby official site](https://www.ruby-lang.org/en/documentation/installation/). Find your preferred installation method and receive detailed instructions. If you are on Ubuntu, I would use RVM over package manager.

I used RVM (Ruby Version Manager) to install Ruby and Ruby on Rails. I also use it for handling different versions of Ruby on Rails. We can visit [RVM's official site](https://rvm.io/rvm/install) for detailed instructions. Or you can follow the instructions I [used](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi2y4a_1-7VAhUHrFQKHfrLARQQFggmMAA&url=http%3A%2F%2Frailsapps.github.io%2Finstallrubyonrails-ubuntu.html&usg=AFQjCNHKle1jf5eCRlbmR1OQ7wIp0jIj_Q).

Ruby runs best on Ubuntu(Linux) and Mac. It will install in Windows, but there are some issues with running Ruby on Rails and Javascript frameworks. I don't know how successfully they've been resolved. Initially I had a powerful Windows desktop and set up an Ubuntu Virtual Machine on it with [VMware](https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/12_0). But development doesn't generally rely on a lot of computing power, and today I use an old laptop with [Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0) installed.

### Install Jekyll

Jekyll installation is insanely quick once you get Ruby installed properly. With a quick trip to the [Jekyll official site](https://jekyllrb.com/docs/installation/) we can have an extensive installation guide.

The quick installation is: <sup>1<sup>

>$ gem install Jekyll

>$ jekyll new my-site

>$ cd my-site

>my-site$ jekyll serve


Then go to http://localhost:4000 in your browser. For a different port use.

>my-site$ jekyll serve --port 5000

The Jekyll website has all the information you need to get started writing posts, additional pages, linking, etc., so it's worthwhile to go through the docs.

#### A Few Pointers

Out of the box Jekyll comes with a simple some HTML and CSS included. If you don't like the appearance or want additional features consider exploring Jekyll Themes or Jekyll Templates with a quick google search.

Setting up categories or tags is explained in the [docs](https://jekyllrb.com/docs/collections/).

I use [yellowblue](https://github.com/chalatz/yellowblue) and modified it. It helped me understand how someone else set up their system. If I were building a static site again, I would just build it from scratch. Modifying someone else's work isn't worth it more than once.

##### Footnotes:

1. The $ denotes using the terminal, console or shell to type this code. You'll see it a lot while your programming, but for me on day 1, I didn't understand it.
