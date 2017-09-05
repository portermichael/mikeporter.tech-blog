---
layout: post
title: Choosing a Domain Name
category: Deploying
permalink: choosing-a-domain-name
tags: ['HowTo', 'Deploying']
author: Michael Porter
---

If you can serve your app in development, you should deploy it. But before you deploy it you need a sweet name. It should encompass the app's content and not be some weird mesh of numbers and letters.

<!-- more -->

### Choosing Your Domain Name

#### Top Level Domains or Not?

TLDs (Top Level Domains) include .com, .net and .org. They were the first domains available and the most easily marketable/familiar. TLDs also have the fewest name choices. A lot of two word combinations, and marketable phrases have been bought and are being held/used by people and companies. I couldn't get mikeporter.com in 2017. Another Mike Porter has it, but I could get mikeporter.tech.

##### Buying an Open Top Level Domain

Choosing an open TLD is a difficult process. It will require creativity and a good understanding of what "types" of names are still available. A lot of names have been taken and just held onto hoping for a time when someone will pay five figures or more. I recommend checking [Panabee](www.panabee.com) for some help brainstorming. They mix and match your name/phrase with about 30 prefixes and suffixes. It can help take a step in the right direction towards understanding how "bought out" your desired domain is.

##### Buying a Domain

A lot of domains are held in the hopes someone will buy them. You can find out who owns it, and send them an email with your story and an offer. Sometimes you'll get lucky, ...other times it will cost thousands.

While choosing a great name is difficult, registering a name is incredibly easy. Some DNRs (domain name registrars) even offer $.99 for your first domain name. A few big DNRs are [GoDaddy](https://www.godaddy.com/), [Namecheap](https://www.namecheap.com/), [Amazon Web Services](https://aws.amazon.com/route53/), [Microsoft Azure](https://azure.microsoft.com/en-us/services/dns/) and [Google Domains](https://domains.google/).

These DNRs also provide hosting services. It is easy to host on their service, but AWS and Google Domains have the cheapest and easiest hosting to upgrade. AWS, Azure and Google Domains both charge about $12 for registration, while GoDaddy and NameCheap charge anywhere from $.99 to $11.99.

It should also be noted that GoDaddy has a reptuation for trying to upsell services. You will often get emails advertising 20% off your next registration and discounts they are offering. But I've been skeptical of them ever since this [article](https://medium.com/@N/how-i-lost-my-50-000-twitter-username-24eb09e026dd) came out. I do not recommend them.

Namecheap used to be much cheaper than GoDaddy, with regard to hosting, but they are now about on par in terms of cost. Namecheap does not send you nearly as much in terms of email advertisements though.

###### Using Your Domain Name with Another Host

If you want to host with AWS, but chose a different DNR, you have to set up a nameserver change. This is fairly simple, but the exact process is slightly different for each DNR.

With AWS, to start create an [AWS account](https://aws.amazon.com). You start with a mostly free year. We are then going to [Route 53](https://console.aws.amazon.com/route53).

You can spend some time exploring the area, but Route 53 is a Domain Name System. We're going to create a hosted zone. When we create a hosted zone we get 4 values of type NS (name server). These are our domain name servers that we are going to tell our domain name registrar to use.

This part is a also fairly simple, but different for each DNR. You need to find your nameservers for your domain name. You should go to a page that lists your registered domain names. Then you need to find a settings button that opens up settings for that particular domain name. There should be an option for nameservers, you are going to want to add custom name servers and put in the 4 values of type NS that we got when we created a hosted zone.

For GoDaddy you need to migrate to My products, then in domains click manage, then there is a gear pull down for each domain. We are going to use that to navigate to Manage DNS. Here we chage our nameservers to custom and include our 4 from route 53.
