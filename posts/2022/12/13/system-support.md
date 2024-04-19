---
title: "System support"
date: "2022-12-13"
categories: 
  - "development"
  - "ios"
---

# System support in PojavLauncher 2.1 and later

2.1 dropped on Saturday, and since then it's been a pretty good reaction. Our first unjailbroken release of PojavLauncher is out - on GitHub, SideStore, and now AltStore. With this, I want to reiterate the changes coming to system support in future versions of the launcher. I guess this is just a rewrite of issue #384 on the iOS repo, just with an extra reminder to our users.

### Forward note

We're including a `force_unsupported_launch` flag to the preferences plist file, should you choose to bypass software restrictions. By enabling this flag, you understand that you forfeit your ability to get support for issues encountered, unless these issues can be reproduced on a supported device for that release.

Given that PojavLauncher 2.1 is the final release to truly support 1GB RAM devices, iOS 12, and iOS 13, we will be archiving the source code on a new `2.1-legacy` branch on the repository. While we will not be applying new features or bug fixes to the release of 2.1, we may occasionally provide security fixes if needed and release under 2.1.x, alongside another.

### **2.2 - "Warped Nylium"**

PojavLauncher 2.2's main software support change will be dropping all devices with only 1 gigabyte of total memory:

- iPhone 5s

- iPhone 6

- iPhone 6 Plus

- iPad Air (1st generation)

- iPad mini (2nd generation)

- iPad mini (3rd generation)

- iPod touch (6th generation)

You can use the above flag to force PojavLauncher 2.2 to open on the above devices.

PojavLauncher 2.2 will also serve as the last version to truly support iOS 12 and 13. Users will be warned about the incoming deprecation and recommended to update to continue playing PojavLauncher in the future.

### "Dark Prismarine"

Codename "Dark Prismarine" will drop support for launching on iOS 12 and 13. Although this is a minor software lock that can be overridden with the above flag, this is also where code will be transitions to be iOS 14.0+ only - the flag may stop working at any time.

Additionally for unjailbroken users, devices with 3GB or less RAM will receive a one-time warning about possible memory constraints:

- iPhone 6s

- iPhone 6s Plus

- iPhone SE (1st generation)

- iPhone 7

- iPhone 7 Plus

- iPhone 8

- iPhone 8 Plus

- iPhone X

- iPhone XR

- iPhone SE (2nd generation)

- iPad (5th generation)

- iPad (6th generation)

- iPad (7th generation)

- iPad (8th generation)

- iPad Air (2nd generation)

- iPad Air (3rd generation)

- iPad mini (4th generation)

- iPad mini (5th generation)

- iPad Pro (9.7-inch)

- iPod touch (7th generation)

- Apple TV HD

### "Budding Amethyst"

Codename "Budding Amethyst" will be the official end for iOS 12 and 13, using iOS 14.0+ APIs that will require code changes to work on older platforms. The flag above will also be removed, and the transition will be complete.
