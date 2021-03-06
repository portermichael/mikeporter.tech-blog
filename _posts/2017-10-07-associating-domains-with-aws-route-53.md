---
layout: post
title: Associating Domains with AWS Route 53
category: Deploy
permalink: associating-domains-with-aws-route-53.html
tags: ['HowTo', 'AWS', 'Route53']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have a preference towards using specialized business services to fit my needs. It often has a bit more work associated, but I expect a higher degree of specialization should an issue crop up. In this case I purchased domain names on GoDaddy and NameCheap. I want to deploy them to AWS using an S3 bucket. But before deploying, I need to let AWS know I own these domains, and let GoDaddy and NameCheap know I want to use AWS to host! This can be done using Route 53 and GoDaddy/NameCheap's core website.

<!-- more -->

### Our Goal

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our goal is to associate our name servers from Route 53 with our specific domain names. This tells the domain name registrar(NameCheap or GoDaddy) that we want to host over at Route 53 and shares with Route 53 that we own the name.

#### Hosting Providers

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The big hosting providers are all pretty comparable. Using [Azure(Microsoft)](https://azure.microsoft.com/en-us/services/app-service/web/){:target='_blank'} vs [Google Cloud Storage](https://cloud.google.com/products/){:target='_blank'} vs [AWS](https://aws.amazon.com/){:target='_blank'} doesn't really differ. You can expect about 99.9%+ uptime and get a year free. You cannot go 100% entirely free forever and have a specific domain name. [Heroku](https://www.heroku.com/){:target='_blank'} and [Github](https://pages.github.com/){:target='_blank'} pages provide free services, but you end up with something complex and hard to type like mywebsite.heroku.app. It's just not the same as mywebsite.com.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazon Web Services (AWS) is the one I am most experienced with, so it's the one I'll demonstrate<sup>1</sup>.

#### Using Your Domain Name with Another Host

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you want to host with AWS, but chose a different DNR, you have to set up a nameserver change. This is fairly simple, but the exact process is slightly different for each DNR.

Start by creating an [AWS account](https://aws.amazon.com){:target='_blank'}. We are then going to [Route 53](https://console.aws.amazon.com/route53){:target='_blank'}.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You can spend some time exploring the area, but Route 53 is a Domain Name System.

From the Dashboard, navigate to hosted zones.

![Hosted Zones Example](/../../images/posts/associating-domains-with-aws-route-53/hostedZones.png)

Create a hosted zone with the name of your domain. i.e. mikesexample.com we get 4 values of type NS (name server).

![Name Servers Example](/../../images/posts/associating-domains-with-aws-route-53/nameServers.png)

 These are our domain name servers that we are going to tell our domain name registrar to use. Copy them into a text file.

#### Be Careful!

 Route53 adds a . at the end of your nameservers, remove the . at the end when inputting them into as your custom name servers.

#### GoDaddy

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the dashboard at GoDaddy click the manage button.

![GoDaddy Manage Example](/../../images/posts/associating-domains-with-aws-route-53/goDaddyManage.png)

After clicking manage, scroll down to Name Servers and change it to custom. Put the four we saved earlier here!

![GoDaddy Name Servers Example](/../../images/posts/associating-domains-with-aws-route-53/goDaddyNameServers.png)

#### NameCheap

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With NameCheap, from the dashboard, scroll to the domain name you want to use, and select the Manage button.

![Name Cheap Manage Example](/../../images/posts/associating-domains-with-aws-route-53/nameCheapManage.png)

Scroll down to nameservers and select custom DNS. Below that add our four custom nameservers that we copied from Route 53.

![Name Cheap Name Servers Example](/../../images/posts/associating-domains-with-aws-route-53/addNameServers.png)

#### Footnotes

1. I really believe all the big cloud storage providers are the same. Use whichever is most appealing to you.
