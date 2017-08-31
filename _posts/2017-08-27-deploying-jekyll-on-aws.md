---
layout: post
title: Deploying Jekyll on AWS
category: Deploying
permalink: deploying-jekyll-on-aws
tags: ['Jekyll', 'Career', 'HowTo', 'Deploying']
author: Michael Porter
---

If you can serve your app in development, you should deploy it. It helps prevent you (the developer) from including changes that break deployment. I'll provide some different providers and link to deploying with them. I'll then go with what I use, AWS.

<!-- more -->

### Hosting Providers

They are all pretty comparable. Using Azure(Microsoft) vs Google Cloud Storage vs AWS doesn't really differ. You can expect about 99.9% uptime and to pay less than a few dollars a month. If you want to go entirely free, you will lose your specific domain name. Heroku and Github pages provide free services.

Amazon Web Services (AWS) is one of the best tools to use. The first year is mostly free, I am paying less than $1 a month now. It is reliable. They guarantee 99.9% uptime, you only pay for what you use and it scales very well.

### Choosing Your Domain Name

Choosing your domain name is a difficult process. It will require creativity and a good understanding of what "types" of names are still available. A lot of names have been taken and just held onto hoping for a time when someone will pay five figures or more. I recommend checking [Panabee](www.panabee.com) for some help brainstorming. They mix and match your name ideas and can help you step in the right direction.

While choosing a great name is difficult, registering a name is incredibly easy. Some domain registrar companies even offer $.99 for your first domain name. SA few big DNRs are GoDaddy, Namecheap, Amazon Web Services and Google Domains.

These DNRs also provide hosting services. It is easy to host on their service, but AWS and Google Domains have the cheapest and easiest hosting to upgrade. AWS and Google Domains both charge about $12 for registration, while GoDaddy and NameCheap charge anywhere from $.99 to $11.99.

It should also be noted that GoDaddy has a reptuation for trying to upsell services. You will often get emails advertising 20% off your next registration and discounts they are offering. They also aren't the best about maintaining security, and are somewhat susceptable to social hacking.

Namecheap used to be much cheaper than GoDaddy, with regard to hosting, but they are now about on par in terms of cost. Namecheap does not send you nearly as much in terms of email advertisements though.

###### Using Your Domain Name with Another Host

If you want to host with AWS, but chose a different DNR, you have to set up a nameserver change. This is fairly simple, but the exact process is slightly different for each DNR.

To start create an account with [AWS](https://aws.amazon.com). You start with a mostly free year. We are then going to [Route 53](https://console.aws.amazon.com/route53).

You can spend some time exploring the area, but Route 53 is a Domain Name System. We're going to create a hosted zone. When we create a hosted zone we get 4 values of type NS (name server). These are our domain name servers that we are going to tell our doman name registrar to use.

This part is a also fairly simple, but different for each DNR. You need to find your nameservers for your domain name. You should go to a page that lists your registered domain names. Then you need to find a settings button that opens up settings for that particular domain name. There should be an option for nameservers, you are going to want to add custom name servers and put in the 4 values of type NS that we got when we created a hosted zone.

For GoDaddy you need to migrate to My products, then in domains click manage, then there is a gear pull down for each domain. We are going to use that to navigate to Manage DNS. Here we chage our nameservers to custom and include our 4 from route 53.

#### Using S3_website to Host

###### Set Up S3 Buckets

The first step to getting hosted is setting up an S3 AWS bucket. From route 53 click services in the header and migrate to S3. Today it is in the right most column, but I have heard they are revamping it soon.

The S3 setup for AWS is also [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html) if you want to look at an alternative solution sources.

We will want to create two buckets. We don't need logging, but you could if you want to log your visitors.

> example.com

and

> www.example.com

We are going to host our data on one, and use the other to redirect. This way if someone types www.example.com, they automatically get forwarded to example.com. Use your domain registrar name so you do not have to do this twice. We are going to host our data on example.com.

The buckets we need a permissions policy so everyone can read them. We can edit ours by clicking on our example.com bucket, clicking properties on the right hand side and selecting permissions. A window with Grantee and your username should come up. Below that we are going to click edit bucket policy and add:

	{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadForGetBucketObjects",
			"Effect": "Allow",
			"Principal": {
				"AWS": "*"
			},
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::example.com/*"
		}
	]
	}

Just like before replace example.com with your domain name.

###### Using s3_website gem

The instructions linked to above from amazon are cumbersome. There are a lot of steps to set up a static website, that we can avoid by using [s3_website gem](https://github.com/laurilehmijoki/s3_website)! First we need to install the gem

> gem install s3_website

Go ahead and run the gem

> s3_website cfg create

This creates s3_website.yml which stores our access keys and configuration options.

We need to head back to AWS S3 and get our secret keys. In the action bar under services, in the second column from the right is IAM, Identity and Access Management. We are going to generate some secret keys here so that our jekyll has permission to deploy to AWS.

Move over to Users on the left hand side and Create New Users. Add a user name. After hitting create there is a link highlighted titled Show User Security Credentials. That has our access keys. Copy the access key id: and Secret Access Key: to somewhere secure.

Open the s3_website.yml we made a few minutes ago and input

	s3_id: access key
	s3_secret: secret key
	s3_bucket: example.com

We're all done with set up.

Finish up with

> jekyll build

and deploy with

> s3_website push
