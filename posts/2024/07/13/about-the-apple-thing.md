---
title: "About the Apple thing"
date: "2024-07-13"
categories: 
  - "ios"
  - "development"
---

# About the Apple thing

I want to start off this post with a familiar quote. It's one that Apple still has references to in macOS today, and they even made a whole new wallpaper in macOS Sequoia that features it:


**Here’s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… the ones who see things differently — they’re not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can’t do is ignore them because they change things… they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.** 

This is a quote termed by Steve Jobs that was originally used in Apple's Think Different ad in 1997. It was used to spark innovation in the Apple space, to get people working bharder, building smarter, and creating things that they wanted to make. To get people to push the industry foward, regardless of the hurdle. He had just come back from his adventure with NeXT, and was about to launch the new iMac, which would help Apple out of the gutter. Apple would go to build some of the best products in the industry later on, and create entirely new ones. They continued to innovate, even after Jobs passed in 2011.

Times have changed, though. Even for me in these past few months without much updates to this blog.

For the first part, I'm using a different Mac. And, surprisingly, that entire story loops into the issues with Apple that both Stella and I have been discussing, dealing with, and unable to overcome.

## Let's start with the Mac.

I'm currently typing this blog post out on a MacBook Pro (16-inch, 2021) with M1 Max. If those of you who have been here a while remember, I was given a free [M1 Pro](../../../2023/01/05/upgrading-to-2023.md) from my 2018 15-inch keyboard failing on my multiple times. So... where did the M1 Max come from?

Stella bought one in December of 2021, after saving up the $4000 to get the machine in her liking: M1 Max with 32-core GPU, 32GB of Unified Memory, and 2TB of internal storage. From there on, she thought she was set. This was the brainchild of Apple - a fully integrated Mac from top to bottom , chip to software, made by Apple with their world-class optimizations. As time went on, more issues with her Apple silicon experience popped up. Issues with macOS that had existed since Intel, and even new ones that cropped up from the switch to iBoot and the Apple silicon ways. Many were minor, and some were major, but none of the software issues would compare to other, major hardware failures.

Around the time I received my M1 Pro, Stella began to experience major battery drain. Her battery health rapidly declined, to the point where her MacBook Pro was being outlasted in battery by a HP EliteBook 2540p, a computer with a battery manufactured in 2011, that had retained over 10% more health than hers.

The battery issues with Stella's MacBook Pro began to help her stop overlooking the issues with the Apple ecosystem. As time went on, we both began to get hit by macOS Sonoma (arguably one of the **worst** macOS releases in recent history), battery health issues, and new changes and artificial limitations that Apple would ramp up on their users and even hard-working developers.

We slowly began to watch the unraveling of Apple's software and hardware integration, as Apple silicon posed more issues than Intel-based Macs, and even Macs with OCLP on them. We saw the tables turning with the DMA regulations, where Apple pushed heavy limitations on third-party app stores - and contained it to the EU, beginning to punish their EU users in hope that gaslighting would help them fight legislation. 

Stella lost faith in the company she once saw as innovative and made for the users. It started with her iPhone - we had both gotten iPhone 15 Pro Maxes from our carrier, and her experience with it was poor. It overheated doing basic tasks, it felt cheaper and non-Pro, it didn't perform well where it mattered to her. And the limitations on her device soured the experience even more. 

She wanted the freedom to run the apps she wanted to without limitation. I have a paid developer agreement with Apple, but that doesn't immediately unlock everything. Just-in-time compilation, for example, is still a locked down process, made worse by iOS 17 and later. She wanted the freedom to multitask like an iPad, and like Android phones. Citing tweaks from the jailbroken community, we both knew that the devices had the performance to hold many apps at once at the same time. She wanted to be able to run whatever operating system she wanted to. iOS 17 was disappointing her, and it was made even worse by Apple's TATSU signing server, restricting her to the latest versions, with no way to disable iBoot security or at least enter "Permissive Security" like her Mac. 

These reasons, among others, are why she ended up buying a OnePlus 12. And she's been happy ever since. She can run the apps and games she wants, multitask to her hearts content, and unlock her bootloader for an experimentation playground. These issues would come up with her Mac as well, as the grip of Gatekeeper and TSS would advance on this platform... and the realization hit her.

She immediately cut Apple silicon out when she realized that everyone with an Apple silicon based device - anything that runs iBoot, anything that needs to phone home. Apple has the power to stop signing, and restrict users. Apple has the ability to disable buttons to allow custom code. Apple has the power over everyone's device, everything they have, and everything they want to do.

I inherited her MacBook Pro after this, and she's currently daily driving a Samsung Galaxy Book Go with Snapdragon 8cx Gen 2. It's a pretty decent little machine, and - like her OnePlus 12 - brings her joy to use. 

## And now that I have it?

I agree with her on the issues that Apple has created, and I know that it's not getting any better unless there are some major changes. I still prefer Apple platforms, and I have my own reasons to do so - and we respect each other's opinions on that fact, even if it seems like I might be overlooking the issues. Trust me, I'm not.

The first OS I put on this machine was macOS Sequoia. macOS needs to be the first OS installed on the machine anyway, since you can only create a device owner in macOS (at least, for now.) I was using Sequoia on my M1 Pro, but it's basically just M1 Pro with more GPU cores, more RAM, and more storage. You can ask Stella on how much I tweaked about having more than 512GB of internal storage.

Right off the bat, with Sequoia beta 3 and later, you can no longer use spctl to disable Gatekeeper - you now need to use a configuration profile. This was a major blow to us particularly because of how Apple already throws up a scare screen about unsigned and unnotarized apps, which was already updated in Sequoia to require password or biometric authentication to bypass. You can make a good case about this being more secure, but this can also lead to people trusting unsigned configuration profiles (CydiaFree, anyone?)

While TATSU and mandatory Secure Boot do not bother me too much (I operate in Full Security at basically all times), I understand this can be quite annoying for many people's workflows. And it's another obstacle that Apple has created to point people towards that shiny Apple Developer Program account...

...that *also* doesn't grant you immediate access to the OS either, lol.

I'm still waiting on Apple to get back to my response about kernel extension signing (they said they only give it out to corporate accounts, even though you can easily find individual-signed kexts out in the wild,) which is pretty annoying for someone wanting to maintain security and taking the proper route to do it. I paid the $100 for a Developer account, and it's in good standing. But the fact that they can deny me access to functionality of my own hardware is quite infuriating. DriverKit also requires special entitlements, which is a whole 'nother can of worms.

I'm pissed at Apple for my own reasons, but it's not as severe as Stella or some others. It's definitely not as much as the EU is right now.

# And speaking of the EU...

The DMA forced Apple's hand to enable third-party App Store support on iOS, right?

Why. The. Fuck. Is. It. Just. The. App. Store.

I'm not joking, app notarization in third-party app stores is about as strict (if not more) than the App Store itself. And you still need to pay Apple for the developer accounts and the Core Technology Fee! (I know it's malicious compliance, it's still just baffling.)

And it results in innovative apps trying to hit third-party stores from becoming a reality. UTM SE, for example, was denied on the App Store. Okay, Apple, I'll give you that one - maybe it's not fit for your App Store. But the bigger blow was it being blocked for third-party distribution as well. UTM SE was prevented from reaching anyone, because Apple still pulls the strings. UTM SE isn't the only app that has fallen victim to this, I bet, but others just don't seem to get enough recognition. And I'm pretty sure the only reason UTM got approved in the end is because osy got help from Riley and Shane of AltStore to push back at Apple's decision with the EU.

# Wrapping up

My thoughts on Apple are currently mixed. I like their products, still, and while I don't agree with the policies, I'm probably not going to be switching. I've tried multiple times over the years, but have always found myself going back to Apple after a while. It's my opinion, and I don't think that's going to change, regardless of what people say to/about me.

But, as a paying customer, I get to complain. And as I said before, I don't agree with the direction Apple is going. They are actively the antithesis of the quote I started this blog post off with, and supressing the ideas of the creators who want to develop for their platforms, and the users who want to experiment with their products. This is what pushed Stella over the edge to find another machine, and a new ecosystem, and the very same reason the EU is fighting Apple - hard.


