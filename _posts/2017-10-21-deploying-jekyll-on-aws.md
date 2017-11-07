---
layout: post
title: Deploying and Redirecting Jekyll on AWS
category: Deploy
permalink: deploying-jekyll-on-aws.html
tags: ['HowTo', 's3']
author: Michael Porter
---

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you can serve your app in development, you should deploy it. As a developer you want to share your app, you want to fail fast<sup>1</sup>, you want to make changes quickly and continuously integrate.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Everything we want to do revolves around deployment.

<!-- more -->

### Hosting Providers

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We [previously]({{ 'associating-domains-with-aws-route-53.html' }}) went over how to set up your route 53 with GoDaddy and NameCheap domain names. Our first step from there is going to be setting up an S3 bucket. A bucket is a container that holds things. It can hold folders or any type of file. We're going to be using buckets to hold a bunch of files and folders that make up our website.

### Using S3_website to Host

#### Create Two S3 Buckets

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The official S3 setup for AWS and a static site is at [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/website-hosting-custom-domain-walkthrough.html){:target='_blank'}. I thought it was difficult to read and didn't include any pictures.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We will want to create two buckets. I will be using example.com and www.example.com. You should use your domain name. We are going to host our website on example.com, and use the other to redirect. This way if someone types www.example.com, they automatically get forwarded to example.com (or vice versa, I mean you're the one setting it up).

![s3-Create-Bucket](/../../images/posts/deploying-jekyll-aws/s3CreateBucket.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are going to create both buckets the same way. Click Create Bucket to open the modal. Add your domain name, check your region and click Create.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We aren't deploying a CDN now, so we can just choose a region in our country. We're also going to go over properties and permissions shortly, but it's harder in their tiny window.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

#### Give S3 Buckets Public Read Access

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Both buckets will need a permissions policy so everyone can read them. We can edit ours by clicking on our bucket, clicking properties on the right hand side and selecting permissions. We want to give the public READ access to our bucket because we are hosting our website from the bucket. Do not give public WRITE access to your bucket. That would enable the public to change what is on your bucket.

![s3-Permissions](/../../images/posts/deploying-jekyll-aws/s3Permissions.png)

### Website Hosting S3 Bucket

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Under the properties tab configure our hosting bucket to a static website by inputting index.html and clicking save.

![s3-Main-Host](/../../images/posts/deploying-jekyll-aws/s3MainHost.png)

#### Change the CORS Configuration

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Under the permissions tab, configure our CORS by pasting this code in and replacing example.com with the bucket name/website name you are using to host your website.

>	{
>	"Version": "2012-10-17",
>	"Statement": [
>		{
>			"Sid": "PublicReadForGetBucketObjects",
>			"Effect": "Allow",
>			"Principal": {
>				"AWS": "*"
>			},
>			"Action": "s3:GetObject",
>			"Resource": "arn:aws:s3:::example.com/*"
>		}
>	]
>	}

![s3-CORS-Configuration](/../../images/posts/deploying-jekyll-aws/s3CorsPermissions.png)

### Redirect Bucket

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Under the properties tab configure our redirect bucket to redirect by inputting our hosting/website bucket and clicking save.

![s3-Redirect-Request](/../../images/posts/deploying-jekyll-aws/s3RedirectRequest.png)

### Get IAM Secret keys

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our goal is to create a secret key that we can use to upload our website to the s3 bucket. We need to get our secret keys from IAM now. IAM is Identity and Access Management. It's one of the services bundled in AWS. Navigate to Services and find IAM.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

#### Create a Group

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We are creating a group to manage security. We want this group to only have access to our s3 buckets. This way if we have a security issue, only s3 buckets would be compromised. Navigate to groups on the left of IAM and create a group name. Mine is called s3BucketAccess. Just click on through to next step using the default options.

![IAM-Bucket-Access](/../../images/posts/deploying-jekyll-aws/IAMs3Access.png)

#### Create a User and Add it to Group

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Navigate to Users on the left hand side and Create New Users. Add a user name. Give yourself Programmatic access, so you have access to secret keys. Then add yourself to our newly created Group.

![IAM-Programmatic-Access](/../../images/posts/deploying-jekyll-aws/IAMProgrammaticAccess.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastly, navigate back to users, click your user name and select the Security Credentials tab. Create an access key and save it or copy it. We will need it later. This access key needs to be treated securely. If you upload it to github or post it online, it will get stolen and people will use access to your buckets for shady activities possibly costing you money.

![IAM-Security-Credentials](/../../images/posts/deploying-jekyll-aws/IAMCreateAccessKey.png)

### Using s3_website gem

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like before the instructions form Amazon are a bit cumbersome. We can save a lot of time and effort by using the [s3_website gem](https://github.com/laurilehmijoki/s3_website){:target='_blank'}!

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;First we need to install the gem

> gem install s3_website

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Go ahead and run the gem

> s3_website cfg create

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This creates s3_website.yml which stores our access keys and configuration options.




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

1. Fail Fast - As a developer you want to fail quickly, so you are aware of a bug when it occurs. It is much harder to correct a bug after you've written lots of code. If you build a whole website, and it isn't deploying, phew might have a couple hours of work to do.
