---
layout: post
title: Installing and Serving a Jekyll App
category: Jekyll
permalink: installing-and-serving-a-jekyll-app.html
tag: ['HowTo']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Getting started with Jekyll is quick and easy. In about 20 minutes you can have a site running and ready to publish posts. First, install Ruby following the links below, then use the Jekyll link to documentation or follow my directions.

<!-- more -->

### Install Ruby

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These are the directions I used to install Ruby (and Ruby on Rails) the [first time](http://railsapps.github.io/installrubyonrails-ubuntu.html){:target='_blank'}. Ruby on Rails is not needed for Jekyll. They are two different frameworks.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruby has a some great step-by-step instructions at the [Ruby official site](https://www.ruby-lang.org/en/documentation/installation/){:target='_blank'}. Find your preferred installation method and receive detailed instructions. If you are on Ubuntu, I would use RVM over package manager.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I used RVM (Ruby Version Manager) to install Ruby and Ruby on Rails on Ubuntu. I also use it for handling different versions of Ruby on Rails. We can visit [RVM's official site](https://rvm.io/rvm/install){:target='_blank'} for detailed instructions. Or you can follow the instructions I [used](https://www.ruby-lang.org/en/documentation/installation/){:target='_blank'}.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruby runs best on Ubuntu(Linux) and Mac. It will install in Windows, but there are some issues with running Ruby on Rails and Javascript frameworks. I don't know how successfully they've been resolved, although there have been recent updates. Initially I had a powerful Windows desktop and set up an Ubuntu Virtual Machine on it with [VMware](https://my.vmware.com/en/web/vmware/free#desktop_end_user_computing/vmware_workstation_player/12_0){:target='_blank'}. But development doesn't generally rely on a lot of computing power, and today I use an old laptop with [Ubuntu](https://tutorials.ubuntu.com/tutorial/tutorial-install-ubuntu-desktop#0){:target='_blank'} installed.

### Install Jekyll

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jekyll installation is insanely quick once you get Ruby installed properly. With a quick trip to the [Jekyll official site](https://jekyllrb.com/docs/installation/){:target='_blank'} we can have an extensive installation guide.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The quick installation is: <sup>1<sup>

>$ gem install Jekyll

>$ jekyll new my-site

>$ cd my-site

>my-site$ jekyll serve


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then go to http://localhost:4000 in your browser. For a different port use.

>my-site$ jekyll serve --port 5000

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Jekyll website has all the information you need to get started writing posts, additional pages, linking, etc., so it's worthwhile to go through the docs.

#### A Few Pointers

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Out of the box Jekyll comes with a simple some HTML and CSS included. If you don't like the appearance or want additional features consider exploring Jekyll Themes or Jekyll Templates with a quick google search.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Setting up categories or tags is explained in the [docs](https://jekyllrb.com/docs/collections/){:target='_blank'}.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I used [yellowblue](https://github.com/chalatz/yellowblue){:target='_blank'} and modified it. It helped me understand how someone else set up their system. If I were building a static site again, I would just build it from scratch. Modifying someone else's work isn't worth doing more than once.

##### Footnotes:

1. The $ denotes using the terminal, console or shell to type this code. You'll see it a lot while your programming, but for me on day 1, I didn't understand it.
