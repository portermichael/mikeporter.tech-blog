---
layout: post
title: Associating Domains with AWS through Route 53
category: Deploy
permalink: associate-domain-with-aws-through-route-53
tags: ['HowTo', 'Deploy', 'GoDaddy', 'NameCheap', 'Route 53']
author: Michael Porter
---


If you can serve your app in development, you should deploy it. As a developer you want to share your app, you want to fail fast<sup>1</sup>, you want to make changes quickly and continuously integrate.

It all revolves around deployment.

<!-- more -->

### Hosting Providers

The big hosting providers are all pretty comparable. Using [Azure(Microsoft)](https://azure.microsoft.com/en-us/services/app-service/web/) vs [Google Cloud Storage](https://cloud.google.com/products/) vs [AWS](https://aws.amazon.com/) doesn't really differ. You can expect about 99.9%+ uptime and get a year free. If you want to go 100% entirely free forever, you will lose your specific domain name. [Heroku](https://www.heroku.com/) and [Github](https://pages.github.com/) pages provide free services.

Amazon Web Services (AWS) is the one I am most experienced with, so it's the one I'll demonstrate<sup>2</sup>.

#### Using S3_website to Host

###### Set Up S3 Buckets

We [previously](https://www.mikeporter.tech/choosing-a-domain-name) went over how to set up your route 53 with your domain name.

The first step to getting hosted is setting up an S3 AWS bucket. From route 53 click services in the header and migrate to S3.

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


#### Footnotes

1. Fail Fast - As a developer you want to fail quickly, so you are aware of a bug. It is much harder to correct a bug after you've written lots of code.

2. I really believe all the big cloud storage providers are the same. Use whichever is most appealing to you.
