---
title: "JIT"
date: "2025-02-24"
categories:
- "ios"
- "development"
---

# JIT

I want to preface this post with a little bit of fact: I don't like dogging on Apple. I still like many things about them - the tight security, Apple services like Apple Music and Apple TV, and even parts of their hardware, firmware, and software design. I don't just blatantly "hate" Apple, and I will give credit where credit is due. 

That being said, I will also give criticism where it is due as well. I wasn't planning to write a blog post today, but Apple gave me quite a big reason to.

## iOS 18.4 (22E5200s)

Apple dropped the first iOS 18.4 beta on February 21, 2025. It contains a few new features - the Sketch template in Image Playground, some redesigned buttons, Ambient Music, et cetera. Among the things that changed, one of them was very unfortunate.

You can read [osy's writeup](https://gist.github.com/osy/8940e5ae5f24646b808f58d197883ca5) on what happened, but a TL;DR: In the past, enabling JIT consists of signing an application/process with the `get-task-allow` entitlement to mark it as debuggable. From here, you attach a debugger, which sets the `CS_DEBUGGED` flag. With `CS_DEBUGGED`, we are able to have unsigned pages in memory - enabling us to flip between RW and RX for JIT capabilities. 

With `22E5200s`, this has changed to requiring `CS_DEBUGGED` **and requiring the debugger to possess `com.apple.private.cs.debugger`**. Currently, this only applies to the debugger included with Xcode, and there is no way in *hell* that you will get an app sideloaded with that entitlement on iOS (without TrollStore 3 or a jailbreak.) The cherry on top? Apple put this code into the TXM, which serves with SPTM to enforce policies for the running OS, replace PPL, and have a much smaller attack surface than XNU itself.

After his research, osy has pretty much deemed this a patch, and JIT to now be inaccessible to users outside of Xcode (or again, TrollStore 3 or a jailbreak.) Any workarounds amount to a TXM vulnerability, and would likely be patched within a few weeks of their release.

## Becoming enemies

Like I said, I do not like just shitting on Apple for no reason. But if they give me a reason, and if they give me one as big as this, I will absolutely blast them. This change - backed by a lack of JIT-related exploits in recent history, and fueled by their anti-sideloading rhetoric - is very clearly a strike to the heart of the tinkering and modding communities that made great software. Countless software will be affected by this anti-developer and anti-consumer change to their technologies - technologies I used to enjoy and appreciate over the competition.

For years now, it has been obvious that iOS is not as friendly of a place as Android is to developers like me - helping to write software like PojavLauncher, which has brought Minecraft: Java Edition to mobile devices for over four years. This change has made me a bit afraid of what lies ahead for PojavLauncher's iOS port, and whether or not it is worth our time to continue working on the project on unjailbroken devices - and I am probably not the only member of a JIT-based iOS project that thinks this way.

What happened to the crazy ones at Apple? The misfits? The rebels? The troublemakers? What happened to the Apple of yesteryear that actually cared about innovation? Are they really so incapable of innovating with their own platforms that they'd rather shut down others for stepping up? Is it really such a bad thing to allow virtual machines to run on your devices? To have desktop Minecraft ported to iPhones and iPads? To be able to emulate and play PS1, PS2, GameCube, and Wii games? To be able to take the hardware Apple made farther than this company is willing to go?

After having used Apple devices for many years, pouring lots of cash into getting newer devices, and seeing where Apple has come, I fail to find a reason to support them anymore. I was planning to replace my old M1 Pro, running as a server with macOS on it (for GitHub Actions and other macOS-only tasks), with a new Apple silicon Mac - possibly an M1, M2, or M4 Mac mini. I'm not so sure on that anymore.

## Being naive

When Stella first switched back to Android and Windows, we talked about a scenario like this. I held out hope that at least one person in Apple - someone higher-up - would allow the developers to continue to provide alternative JIT in some fashion. It was already hard enough to sideload, to deal with codesigning, to deal with JIT enabling, to deal with entitlements, so *maybe* someone would throw a bone. 

It saved us for almost a year, until now. Whoever that person was or people were, I congratulate you for going against Apple's predetermined curve, and appreciate you for providing JIT without Xcode to enable opportunities Apple doesn't want enabled. 

Show me a list of JIT-related exploits  
\- Eva