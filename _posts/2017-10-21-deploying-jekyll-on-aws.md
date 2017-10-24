---
layout: post
title: Deploying Jekyll on AWS
category: Deploy
permalink: deploying-jekyll-on-aws.html
tags: ['HowTo']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you can serve your app in development, you should deploy it. As a developer you want to share your app, you want to fail fast<sup>1</sup>, you want to make changes quickly and continuously integrate.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everything we want to do revolves around deployment.

<!-- more -->

### Hosting Providers

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We [previously]({{ 'associating-domains-with-aws-route-53.html' }}) went over how to set up your route 53 with GoDaddy and NameCheap domain names.

#### Using S3_website to Host

###### Set Up S3 Buckets

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first step to getting hosted is setting up an S3 AWS bucket. From route 53 click services in the header and migrate to S3.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The S3 setup for AWS is also [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html){:target='_blank'} if you want to look at an alternative solution sources.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will want to create two buckets. We don't need logging, but you could if you want to log your visitors.

> example.com

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and

> www.example.com

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are going to host our data on one, and use the other to redirect. This way if someone types www.example.com, they automatically get forwarded to example.com. Use your domain registrar name so you do not have to do this twice. We are going to host our data on example.com.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The buckets we need a permissions policy so everyone can read them. We can edit ours by clicking on our example.com bucket, clicking properties on the right hand side and selecting permissions. A window with Grantee and your username should come up. Below that we are going to click edit bucket policy and add:

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Just like before replace example.com with your domain name.

###### Using s3_website gem

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The instructions linked to above from amazon are cumbersome. There are a lot of steps to set up a static website, that we can avoid by using [s3_website gem](https://github.com/laurilehmijoki/s3_website){:target='_blank'}! First we need to install the gem

> gem install s3_website

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go ahead and run the gem

> s3_website cfg create

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This creates s3_website.yml which stores our access keys and configuration options.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We need to head back to AWS S3 and get our secret keys. In the action bar under services, in the second column from the right is IAM, Identity and Access Management. We are going to generate some secret keys here so that our jekyll has permission to deploy to AWS.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Move over to Users on the left hand side and Create New Users. Add a user name. After hitting create there is a link highlighted titled Show User Security Credentials. That has our access keys. Copy the access key id: and Secret Access Key: to somewhere secure.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Open the s3_website.yml we made a few minutes ago and input

	s3_id: access key
	s3_secret: secret key
	s3_bucket: example.com

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're all done with set up.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finish up with

> jekyll build

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and deploy with

> s3_website push


#### Footnotes

1. Fail Fast - As a developer you want to fail quickly, so you are aware of a bug. It is much harder to correct a bug after you've written lots of code.
