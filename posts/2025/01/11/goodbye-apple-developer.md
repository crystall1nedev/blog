---
title: "Goodbye, Apple Developer"
date: "2025-01-11"
categories:
- "macos"
- "ios"
- "development"
---

# Goodbye, Apple Developer

What a way to start the year, huh? 

I've been lulling over the problem of renewing my developer account for a while... and now, here I am. I have the money on hand, it's the eve of the renewal date...

## Auto-renew off.

A few minutes ago, I turned auto-renew off for the account. I also don't think I'm going to pay it manually, either. These decisions are likely going to be very disruptive to the development and deployment of Malachite, but... I think it's for the best. If I don't continue to renew it.

## An expensive charge for little gain.

When I went to bed last night, and early this morning after waking up, I couldn't shake the thought that I was paying $99 a year for... not much in return. Let me revisit the things that brought me to my developer account:

- Increased signing time from 7 days to 365 days
- Ability to add a much larger amount of devices
- Access to developer betas
    - At the time I first signed up, they weren't open to all
- Ability to request and sign with many more entitlements
- Ability to use Xcode Cloud for Ci/CD
- Ability to distribute with TestFlight and the App Store
- Ability to notarize apps on macOS outside of the App Store

### Increased signing time from 7 days to 365 days

This one... isn't as important as it used to be as I've noticed that I barely sideload apps for my phone anymore. When I am doing so, I tend to also deploy said apps regularly anyway. I don't agree with the restriction to every week, but I don't feel that I get much value from a whole year anymore.

### Ability to add a much larger amount of devices

This only matters if I still have a developer account at all. Otherwise, I only have to worry about the devices that I use - my iPhone, my Mac, my iPad Pro, and my Apple TV. 

My Mac is my Mac, it's not hard to sideload iOS apps. My iPad Pro and Apple TV are jailbroken, so restrictions are (almost) completely nullified. The only device I would need to actually, legitimately sideload to is my iPhone... but that's only one device. Maybe add on the iPhone XR that Stella got for free that one day - but that's still only two.

### Access to developer betas

Completely void. I can just find the IPSWs manually if the Developer beta option isn't in Settings for me.

### Ability to request and sign with many more entitlements

At least for Malachite, I don't need many exclusive entitlements. There was the GameKit entitlement for a little thing I hid in the app, but Apple had already fucked up that integration in iOS 18 anyway.

### Ability to use Xcode Cloud for CI/CD.

The only benefit to Xcode Cloud over GitHub Actions or custom scripts for me is the ability to push to App Store Connect. Otherwise, I don't like Xcode Cloud much - mainly because it's slower at compiling Malachite than my 2016 12-inch MacBook, which is moderately annoying (but the App Store Connect API is somehow worse to deal with than Xcode Cloud.)

### Ability to distribute with TestFlight and the App Store

**This is still a pretty big part of my holdup.**

On the one hand, *just* having an account to publish to the App Store or TestFlight seems like a waste. On the other, both are powerful tools that would get Malachite up and running with a much larger variety of users. It seems like the best decision to just continue renewing so I have that chance, right?

Malachite started as a small app to help Stella see things closer and it wasn't really every supposed to be on the App Store. That would have been nice, especially since it means that more people will be able to and want to use it, not to mention avoiding the troubles of sideloading an app with extensions.

While it's not applicable for all, some currently using the TestFlight might be compelled enough to deal with the sideloading process. I'll update my AltStore repo with Malachite and beta versions of it so it's at least a little easier for sideloading, but I know this is going to be very annoying for many of you.

I empathize... and it's part of the reason that I had a developer account in the first place. **I would say that I'm sorry... but saying that would place the blame of an anti-consumer practice on someone who is, in the end, still just a consumer.** 

### Ability to notarize apps on macOS outside of the App Store

At least I can still run them without needing to notarize. Regardless of how many popups Apple sends my way, I will not start notarizing my apps just because of it.

## Still restricted

Even after paying the fee, I still need to politely ask Apple for access to certain technologies - even if I just want to run them on my own machine. 

Recently, I wanted to build and sign a kernel extension to use on my MacBook Pro withou tneeding to drop the machine into Permissive Security in order to do it. That kills off FairPlay for iOS apps, Apple Pay, and Activation Lock - all three of which I make extensive use of on my Mac. In order to get the ability to sign a kernel extension, I had to ask Apple.

I was denied twice. Not because the kernel extension had DriverKit replacements, or because I was malicious. It was because "we only enable KEXT signing on corporate accounts."

Ignoring the fact that I had seen many personal Apple Developer accounts with kernel extension signing privileges, I just gave up and never ended up installing the extension I wanted to. There's no other option other than losing security and functionality by dropping to Permissive.

This, among other "you need to request" entitlements and features, are some of the things that made me start to doubt whether or not it was worth it anymore.

## Device issues

Did I ever mention that time I added my Apple TV 4K to my developer account, and couldn't sideload apps because it showed itself as an iPod in the device portal?

That was a very annoying few days after I got my replacement Apple TV 4K after having [bricked my old one with recoveryOS](https://twitter.com/crystall1nedev/status/1872002920159531408), as it kept development from happening during that time as I waited for Apple to fix the problem.

I haven't had anything like that happen since, but now I have to wait about two days every time I add a device to deploy to it. This was very frustrating when I picked up my brand new iPhone 16 Pro Max and couldn't work on Malachite with it.

Having these kinds of issues when I've paid for the account is **unacceptable**. Other than my Patreon, I'm not working for money. What if I was, and my work as delayed by the incompetence of Apple's servers when registering my devices? **This is the kind of delay that could get you *fired.***

## Very clear goals

But, in the end, nothing I've said here will matter to Apple. They get their $99 one way or another, and you get to deal with their continued limitations. This is probably the biggest reason I don't want to renew my account anymore.

Google and Microsoft both offer a one-time fee to enable full development work on their operating systems, and deployment to their stores. There are no "ifs, ands, or buts" because these operating systems also allow you to develop without said fee for free, still with access to most of the technologies and functionality included. 

Want to develop a WinUI 3 app for Windows 11? Go ahead. Want to develop a custom webhook app for Android? Sure thing, just sideload it. Apple is the only one making such a big deal out of signing, ensuring that "you can trust the app because it's trusted by Apple."

**How can we verify that we can trust Apple?** I mean, clearly there are [actual](https://appleinsider.com/articles/25/01/08/scammers-are-going-after-baldurs-gate-3-gamers-in-the-app-store) [scams](https://9to5mac.com/2022/01/11/developer-exposes-another-multimillion-dollar-scam-app-on-the-app-store/) all over the [store](https://arstechnica.com/information-technology/2023/02/pig-butchering-scam-apps-sneak-into-apples-app-store-and-google-play/). Apple's verification system targets [legitimate developers](https://twitter.com/provenanceapp/status/1875635732645343242) more often than fake ones. Apple's not afraid of striking your ideas down and [stealing](https://twitter.com/keleftheriou/status/1437845736951992321?s=61&t=2SJZIzzHazcRyn1kfcgT6w) them for itself. **The App Store is a breeding ground for exactly what Apple says it protects you from, where the good ideas are shot down and the money makers are put in their place.**

It's hard not to see the facts here. **And it's hard to support that, too.**

## Bye bye.

Putting the facts down helps me think. Rereading this post has just made the decision to not renew my developer account feel even better. I'm listening to my morals and my wife's words about the issue with this overpriced and underpowered program, **built to give you the false sense of owning more of your hardware and like you are contributing to the world's best ecosystem of apps**. The restrictions Apple has put into place squanders real innovation, like Winlator, Suyu, AetherSX2. They prevent users who aren't lucky enough to have $99 a year from being able to use custom entitlements, whereas other platforms enable you to install if you trust yourself.

So... I take back what I said in my previous post about wanting to renew my account. I don't anymore. I'd rather stand with the rest of you than to contribute to the greater machine.

Downgraded,  
\- Eva