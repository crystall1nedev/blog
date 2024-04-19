---
title: "Sideloading and JIT"
date: "2023-02-13"
categories: 
  - "development"
  - "gayming"
  - "ios"
---

# iOS, sideloading, and JIT

Since this has become a staple of the unjailbroken PojavLaucher iOS experience (and an issue), I feel like I'm obligated to write a post about it.

PojavLauncher on iOS and tvOS needs to be sideloaded in order to work properly, simply because (at this time) Apple doesn't allow apps with dynamically changing code on the App Store. Additionally, application protections prevent JIT from working without its process being actively debugged (as it's only really meant to be used when developers are developing.)

This part is what's causing the issue for unjailbroken users.

We've worked with multiple developers (and with our past experiences) to figure out what sideloading paths and JIT enablers do the following:

- are safe, and don't use personal data

- are stable, and don't present issues out of the blue

- are easy to set up and use

- are free, so our users don't need to pay

- support the required entitlements for proper operation

With that list of requirements, we made our two lists.

For sideloading PojavLauncher, you can use one of the following:

- TrollStore
    - If your iOS version is supported, TrollStore is the best option for sideloading.

- AltStore or SideStore
    - This is the #1 recommended method for other iOS versions as it immediately hit the marks from the beginning. It works the same across iOS versions, and is widely used by sideloaders.

- Sideloadly

- iOS App Signer + Xcode

- libimobiledevice tools

- AppSync Unified
    - While it works, the Documents go into the wrong place when installed with AppSync Unified.

For enabling JIT:

- TrollStore
    - TrollStore installations will automatically enable JIT for you.

- AltStore or SideStore
    - AltStore installations will automatically enable JIT when connected to the AltServer it was installed with. In a future update, SideStore installations will automatically enable JIT when connected to the WireGuard VPN.

- JitStreamer
    - As far as I know, JitStreamer is slated to be shut down in March, but is still a supported option for now.

- Jitterbug

- Xcode

- libimobiledevice tools

We'll continue to grow this list as other services appear and are properly tested to ensure a safe and reliable environment for you to play and create in PojavLauncher.

These services are where I draw the line. Anything not listed above needs to be vetted by our teams to make sure it meets the requirements above. If it's not, we won't allow you to recommend it to other users on our GitHub repository or Discord server - this is to keep a safe and stable environment for everyone.

Additionally, we will likely immediately discourage or moderate services that download PojavLauncher over-the-air (a big one is Scarlet.) Currently the only official source that does this is [https://alt.crystall1ne.dev](https://alt.crystall1ne.dev) - my AltSource for Alt/SideStore.

Other repositories and signing services can have unknown changes to source code, resulting in unexpected behavior or security concerns, as well as invalid signatures which render JIT unusable and the launcher useless.
