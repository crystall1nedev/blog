---
title: "macOS Support Theory"
date: "2023-02-13"
categories: 
  - "macos"
---

# My theories about future macOS system support

This post is just to really quickly get out a theory I have on the future of macOS device support.

macOS is in an interesting position, and somewhat made confusing by model numbers and board IDs in Intel-based Macs. Apple is going to want to get those out as soon at possible, but due to being much more common and some models being more popular, Apple needs to play their cards right to appease the users. They can't play it just the same way as the PowerPC to Intel transition back in 2006.

The below chart shows what data we currently have on system support:

<figure>

<table><tbody><tr><td>OS version</td><td>Minimum model</td></tr><tr><td>macOS Catalina</td><td>2015 MacBook<br>2012 MacBook Air<br>2012 MacBook Pro<br>2012 iMac<br>2017 iMac Pro<br>2012 Mac mini<br>2013 Mac Pro</td></tr><tr><td>macOS Big Sur</td><td>2015 MacBook<br>2014 MacBook Air<br>2013 MacBook Pro (Late)<br>2014 iMac<br>2017 iMac Pro<br>2014 Mac mini<br>2013 Mac Pro</td></tr><tr><td>macOS Monterey</td><td>2016 MacBook<br>2015 MacBook Air<br>2015 MacBook Pro<br>2015 iMac<br>2017 iMac Pro<br>2013 Mac Pro<br>2014 Mac mini<br>2022 Mac Studio</td></tr><tr><td>macOS Ventura</td><td>2017 MacBook<br>2018 MacBook Air<br>2017 MacBook Pro<br>2017 iMac<br>2017 iMac Pro<br>2019 Mac Pro<br>2018 Mac mini<br>2022 Mac Studio</td></tr></tbody></table>

<figcaption>

Table of support for macOS Catalina 10.15, macOS Big Sur 11, macOS Monterey 12, and macOS Ventura 13.

</figcaption>



</figure>

Before Apple Silicon released, you could run the latest version of macOS on a machine seven years old. Now with the transition currently in play, we see a bunch of Intel-based Macs getting killed quickly:

- Most 2012 and 2013 Macs got killed with Big Sur.

- The first 12" MacBook got axed by Monterey.

- The original Touch Bar MacBook Pros died in Ventura.

However, there are still some machines that held out - possibly due to popularity, features, or performance:

- 2014 Mac mini

- 2013 Mac Pro

- 2015 MacBook Pro

- 2014, 2015 iMac

Now, it's easy to draw a conclusion that Apple just supports devices for longer. But _why?_ My theory is that popularity, issues, features, and "Pro" all contribute to software support. Ventura helped me solidify it.

- Apple began to lessen the supported years of lower tier products.

- If the device is widely used and respected by the community, it's likely to last longer.

- Devices tend to see between 5-7 years of support, with 7 being the hardcoded end of life date.

- Apple Silicon is having an impact on the support cycles - but not as much as we all might think.

Using these key points in my analysis and work, I believe that this is the route macOS will take for the next 3 years until Intel support is dead:

<table><tbody><tr><td>OS version</td><td>Expected minimum model</td></tr><tr><td>macOS 14</td><td>2018 MacBook Air<br>2018 MacBook Pro<br>2019 iMac<br>2017 iMac Pro<br>2019 Mac Pro<br>2018 Mac mini<br>2022 Mac Studio</td></tr><tr><td>macOS 15</td><td>2019 MacBook Air<br>2019 MacBook Pro (Late)<br>2019 iMac<br>2019 Mac Pro<br>2018 Mac mini<br>2022 Mac Studio</td></tr><tr><td>macOS 16</td><td>2020 MacBook Air (Late)<br>2020 MacBook Pro (Late)<br>2021 iMac<br>Apple Silicon Mac Pro<br>2020 Mac mini<br>2022 Mac Studio</td></tr></tbody></table>

Here's some explaining for macOS 14's list:

- Because of how much more common Intel Macs are than PowerPC Macs, Apple would get a revolt if they dropped every Intel Mac with 14 - especially the late 2019/early 2020 models.

- Apple will likely drop the 2017 12" MacBook, due to its age, issues, and lack of popularity. The last two could also be applied to the 2018 MacBook Air.

- The 2018 MacBook Pro 13" and 15" cannot be dropped without also canning the 2019 variants of those machines as well. Due to this, Apple will likely keep them going for another year.

- The 2017 iMac Pro was a welcomed addition to the iMac line, and is a Pro machine. It will likely last at least another year.

- The 2018 Mac mini is used widely by many datacenters and services - MacStadium, anyone? They also introduced a major upgrade over their predecessors with desktop-class CPUs in a small enclosure. I anticipate that they will last until Apple Silicon is required.

And macOS 15?

- The 2018 Mac mini is still included for the reasons listed above.

- The late 2019 MacBook Pro, iMac, and Mac Pro are still included because of the welcomed upgrades they brought with them (death of the butterfly keyboard, more expansion, better performance.)

- The early 2020 Macs are too new and common to be dropped now (late 2020 iMac is also in this section.)

And macOS 16. There it is. The end of the Intel-based Mac (at least, the end of major updates - security updates last for a few more years!) With the year being 2025, Apple has fulfilled the five-year support cycle and can finish up their transition by kicking out the old and bringing in the new.

What do you think the support cycle will be like?
