---
title: "Apple Silicon."
date: "2023-06-09"
categories: 
  - "development"
  - "gayming"
  - "macos"
---

# Introducing: Apple silicon.

As a little stop-gap post between the rest of my looks into WWDC23, I wanted to make a post on Apple Silicon in the Mac. Back when it was first announced that the Mac was transitioning to in-house SoCs, we all knew that things were never going to be the same. Whether the changes were for better or for worse, it really was going to be a historic time.

When Apple first unveiled the M1 chip in November of that year, users were blown away by the performance that it brought to the masses. Apple managed to scale up an iPhone 12's processor to _that?_ I remember how people in my classes started to appear with more Apple Silicon machines.

Throughout these last three years, we've seen more creativity than ever, with new product designs for most of the Mac family - and even Apple introducing a new one entirely. Apple's been doing amazing things with their silicon in their other products, and Macs are no exception.

Last year during WWDC22, Apple announced Metal 3. Back when I still had my 2018 15" MacBook Pro, it didn't impress me because it didn't support my machine. I would have just played games in Windows anyway, but that doesn't mean I didn't see the potential that it brought for Apple Silicon users.

And now, WWDC23. The changes introduced with macOS Sonoma were dampened by the Vision Pro taking the spotlight during the Keynote, which made Sonoma seem like a small improvement over Ventura. "Look, we have widgets on the desktop, and a game mode now. Update!"

When Apple announced the Game Porting Toolkit, I also dismissed it. It was a cool "Hey, developers can see how they will perform," but it wasn't much of a big deal. Apple didn't make it into one, at least.

Bad idea, guys, because the Game Porting Toolkit changes everything.

For the first time **ever**, users can run many demanding titles on Apple Silicon. Diablo IV, Cyberpunk 2077, Stray, V Rising, et cetera. Looking in /r/macgaming, the past few days have been "<this game> playing on <Apple Silicon machine>".

When I installed the toolkit, I was blown away, and not just by the Stray testing I did and posted about yesterday. I tested Cyberpunk 2077, a graphically demanding game, just to see how far I could push my 2021 16" MacBook Pro.

With about 30 seconds of messing with settings, I got myself a stable 30-40FPS. So, running the game at what is basically the minimum framerate for most people, right? Sounds unimpressive... if you don't have the context.

- I'm running an x86 game on arm64e.

- I'm running a DirectX 12 game translated to Metal.

- I'm running a Windows game translating to XNU-friendly calls.

- I was drawing a maximum of 25W, but averaging about 19W-20W.

- My CPU + GPU were sitting at around 76 degrees C.

- My fan speed was about 2000RPM.

- I didn't have a charger plugged in.

These are the first times in the **world** that anyone has been able to run a game like this, at said framerate, on battery, with basically no fan noise, decent temperatures, and at 25W of package power. Oh, and after playing for about an hour I still had 60% battery left.

To say that Apple Silicon is a game-changer is a tremendous understatement - and developers are seeing that too. More games than ever before are coming to the Mac now, and it's so exciting to see this happen with my own eyes, because we're basically witnessing a Mac gaming revolution.

It should be noted that the Game Porting Toolkit is not designed to be an end-user solution, and it meant to be an example of how your games will perform on the Mac - and they'll do ever better once they are native for Apple Silicon and harnessing the capabilities of Metal 3.

The future of Mac gaming is finally here, and it starts now.
