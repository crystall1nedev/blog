---
title: "The Malachite thing"
date: "2024-12-22"
categories:
- "ios"
- "development"
---

# The Malachite thing

For the uninitiated, Malachite is my macro photography app.

::: warning Update on Dec. 24, 2024

I talked with Stella about the first demotivating factor I mention in this post. She reiterated that I have multiple other reasons to be proud of developing Malachite, such as having better functionality than the stock camera app. She also got herself a free iPhone XR from work a few days ago, and that will be used for Malachite testing on her end.

As I said later in the post, I still have a bunch of stuff I'm doing for Malachite. Once the XR is done processing on my developer account (and my "Longevity, by Chance" blog posts are done), I'll be working on it a lot more.

:::

I started the project as an answer to Stella's calls for help when needing a magnifier to work on motherboards more efficiently - implementing features like manual focus and better flashlight control right from the start. The stock camera app took a while to get set up properly for this task, and Malachite was as simple as opening the app and tuning your settings.

As time went on, others in my Discord server began to use the app as more than a magnifier. I modified the user interface a bit and added more features, which ended up in it just being a full-blown photography app. People like ASentientBot use is a decent amount and post photos in the my #photography channel from time to time.

Malachite has also been uploaded to TestFlight, so that others can test the app whil I work on the rough edges. According to App Store Connect, I have over 170 users signed up and downloaded, which is certainly a lot more than I was expecting from what is essentially still a passion project for me.

## ...

So, if I have a decent following, and decent reasons to work on it... why do I not have much motivation to continue working on it anymore...?

### No more iPhone

I think that one of the biggest reasons for my demotivation has to do with Stella's move back to Android. I want to preface this section by stating that I am happy, and glad that she is happy, about how she has found devices that work for her needs better than her iPhone did.

I still feel bad about being a major part of the reason she switched back to an iPhone in the first place. Her 15 Pro Max experience was more than subpar, and it resulted in her purchase of a OnePlus 12. She tells me about how it's so much better than her 15 in every way... including the camera system hardware and the software that helps to support it.

When she first moved out of the 15, I loaded a copy of Malachite onto her spare iPhone SE... but that phone doesn't get much usage outside of Apple ID verification codes. It's since been restored multiple times and I haven't bothered to reinstall it, and I've been slowly getting less and less excited about my development with her since she's... not going to use it anyway.

As I said in my last post, I still very much love and support my Stella. But I can't deny that her move was a pretty big blow to my morale in terms of Malachite.

### The alternative options

Another big factor has to do with other apps.

When I first got Malachite onto TestFlight, I sent the link to my family - including a member who has a DSLR and is totally into camera work. I don't think any of them have installed it yet, and I think it's because the stock camera app would work just fine for their uses.

And if anyone needs anything more Pro, then Halide and Camera+ are two great names that they can choose over Malachite.

Stella says that I shouldn't compare Malachite to something like Halide  because they are different in price, backend support, and target capabilities... but it hard not to when you factor in what people are actually going to use, and how something like Halide is likely going to implement the features or bug fixes you want faster and much better than I can.

### A dying account

One of the reasons I wanted to continue to renew my Apple Developer Program account is so that I can eventually push Malachite to the App Store. For Apple's platforms, it's the easiest and most beneficial way for me to get my app in the hands of users. I also make heav yuse of TestFlight, Xcode Cloud, and some other frameworks that are only offered to paid developers for extra goodies in the app.

Without the account, I have... pretty much no reason to work on the app anymore. It will cut off my TestFlight users, and the sideloading situation on Apple platforms will make the benefits of Malachite outweighed by using an app slot and having to refresh every 7 days, instead of just using the stock app or grabbing something on the App Store already. And even if you are willing to sideload the app, the lack of a developer account will cut off some of the funnies I've been planning...

## No action yet

This post is mainly just a rant about some of the (de)motivating things I've been dealing with for the past few months. I don't currently have plans to stop working on it, and I still have a few commits staged locally that I'm working on, including more work on LockedCameraCapture and (better) Camera Control support.

I'll probably feel better about the above later. Need to stop comparing my work to Halide's, figure out a plan for renewing my developer account...

If you want to help me out and can, I just want to ask for some feedback on Malachite. Download the app using the link in its [GitHub](https://github.com/crystall1nedev/Malachite) repository, open it, and send me a request for a new feature, a big fix, or a reimplementation... it would certainly be nice from a developer standpoint.

Back to Xcode,  
\- Eva