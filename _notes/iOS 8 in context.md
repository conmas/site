---
layout: post
title: iOS 8 in context
permalink: /ios-8-in-context
date: 2014-09-01
tags:
  - Writing
original_site: "[[Punchkick]]"
---

## Introduction

Historically, Apple’s keynote at its annual Worldwide Developers Conference has been the platform for the introduction of consumer products and features, including the iPhone 4 in 2010 and iOS 7 in 2013. But this year’s conference was different in that the last third of Apple’s presentation addressed zero end-user features at all—instead, Cook and his team delivered technology after technology on thousands of developers’ wish lists.

Despite the introduction of the redesigned OS X Yosemite and the quick glance at consumer features in iOS 8, the focus of this year’s keynote presentation seemed to be the new APIs and extensible capabilities offered up to iOS’s army of developers. New options for app backends, new tools for inter-app communication, and an entirely new programming language took center stage above the flashier consumer features more commonly revealed. The hundreds of developers in attendance cheered as Craig Federighi, Apple’s Senior Vice President of Software Engineering, announced each new capability in rapid succession. But laypeople tuning in to Apple’s event live stream had to be wondering—what are these people so excited about?

The truth is that, while the expert showmanship of previous WWDC keynotes has captured the public’s imagination, the import of this year’s announcements will trump all of them. While non-developers might have been itching for an early glimpse of this fall’s new iPhones, little did they know that these additions to iOS will doubtless have a greater impact on their everyday lives than any hardware or media-friendly new feature. If last year’s sweeping redesign in iOS 7 was a fresh paint job, iOS 8 is an entirely new engine. This is iOS 8 in context.

### Table of contents

- [Introduction](#introduction)
- [iMessage](/ios-8-imessage)
- [CloudKit](/ios-8-cloudkit)
- [iCloud Drive](/ios-8-icloud-drive)
- [HealthKit](/ios-8-healthkit)
- [HomeKit](/ios-8-homekit)
- [Extensibility](/ios-8-extensibility)
- [Touch ID](/ios-8-touch-id)
- [PhotoKit](/ios-8-photokit)
- [Metal](/ios-8-metal)
- [Swift](/ios-8-swift)
- [Conclusion](#conclusion)

## Conclusion

When Apple introduced OS X Snow Leopard in 2009, Steve Jobs adopted a curious marketing strategy. The operating system loudly boasted zero new features, in stark contrast to the hundreds of minor redesigns and added functions in Leopard two years prior. What changes Snow Leopard did have, however, were as significant as they were invisible: the Finder was rewritten in Cocoa, Apple added OpenCL for better processor utilization, and smarter storage utilization gifted Mac users up to 11 gigabytes back on their hard drives. The story with Leopard was features, impressive effects with Dock reflectiveness and Time Machine’s animated galaxies that have long since been forgotten. But Snow Leopard reworked the very plumbing of OS X, and its impact is still felt in every subsequent release.

Consider how Apple refreshed the interface design in last year’s iOS 7. Gone were glossy bubble buttons and other holdouts from OS X’s “Aqua” user interface schema, replaced with a visual whirlwind of layered translucency and hair-thin Helvetica. iOS 7 caught the public’s attention and grabbed headlines, but its changes were frankly minor—just like Leopard before it, many of iOS 7’s aesthetic updates were largely insignificant. Where Leopard was flash, Snow Leopard was finish. Where iOS 7 was polish, iOS 8 is promise.

Apple maintains one of the most exciting software platforms on the planet, and its stewardship is no small task. iOS is home to more than a million third-party applications and serves hundreds of millions of customers around the world. Its additions are thoughtful, considered, and hard-fought: there are reasons we couldn’t post to Pinterest until now. iOS 8 is the refinement of Apple’s mobile vision, the final expansion of what this operating system deserves to be. The sandbox training wheels are off, and iOS is ready to contend with its toughest competition. The mobile industry is evolving rapidly, and these are Apple’s first steps to evolve with it.

They couldn’t have come at a better time. Just as Apple’s doubters were beginning to question its ability to innovate in the absence of its founding father, and just as Android achieved new heights of adoption and reach, the company extended a hand to third-party developers to help them shape the future of iOS. This release represents the rebirth of a platform, and the opportunity for both Apple and developers to chart its course for the future.

Not since the first version of iOS, and perhaps not since Mac OS became OS X, has there been such ample opportunity for developers to innovate. Apple has released the scaffolding for what will be its tentpole product, the foundation upon which Watch OS will begin to find its legs. Whereas previous versions of iOS were marked by a paranoid reserve, iOS 8 is exploding with utility, bursting with potential, and brimming with promise. Now it’s up to developers to make something of it.

<div class="footnote">**Trademarks, &c.** Call of Duty is a trademark of Activision Publishing, Inc. Adobe and Adobe Creative Suite are trademarks of Adobe Systems Inc. 1Password is a trademark of AgileBits, Inc. Afterlight is a trademark of Afterlight Collective, Inc. Amazon is a trademark of Amazon. Aperture, App Store, Apple, Apple Pay, Apple Watch, Cocoa, Cocoa Touch, FaceTime, Finder, iChat, iLife, iMessage, iPad, iPad Air, iPad mini, iPhoto, iPod, iPod touch, iTunes, iWork, Keynote, Mac, Mac OS, Numbers, Objective-C, OS X, Pages, Retina, Safari, Siri, Touch ID, and Xcode are trademarks of Apple Inc., registered in the U.S. and other countries. iCloud, iDisk, iTunes Radio, .Mac, Mac.com, and MobileMe are service marks of Apple Inc., registered in the U.S. and other countries. AT&T is a trademark and service mark of AT&T Inc. August and August Smart Lock are trademarks of August. Belkin and WeMo are trademarks of Belkin International, Inc. Bluetooth is a trademark of Bluetooth SIG, Inc. SkyDrive is a trademark of British Sky Broadcasting Group plc. Canary is a trademark of Canary Connect, Inc. Cleveland Clinic is a trademark of Cleveland Clinic. ESPN and SportsCenter are trademarks of Disney. Carousel, Dropbox, Dropbox for Business, and Mailbox are trademarks of Dropbox, Inc. Madden NFL is a trademark of Electronic Arts Inc. Facebook, FB, Instagram, Parse, and WhatsApp are trademarks or service marks of Facebook Inc. GIF is a trademark owned by Inmon, William H. Android, Google, Google+, Google+ Photos, Google Cloud Storage, Google Docs, Google Drive, Google Now, Hangouts, Nest, Nest Learning Thermostat, and Nest Protect are trademarks of Google Inc. vCard is a trademark of the Internet Mail Consortium. Kickstarter is a trademark of Kickstarter, Inc. Hue and PHILIPS are trademarks of Koninklijke Philips N.V. Azure, Bing, Microsoft, Office, OneDrive, Windows, Windows Phone, and Xbox are trademarks of Microsoft Corporation. Pac-Man is a trademark of NAMCO BANDAI Games Inc. Netflix is a trademark of Netflix, Inc. NeXT and NeXTSTEP are trademarks of NeXT Software, Inc. NFL is a trademark of the National Football League. Mario and Super Mario are trademarks of Nintendo. Mayo Clinic is a trademark of Mayo Foundation for Medical Education and Research. UNIX® is a trademark of The Open Group. Java is a trademark of Oracle. Pandora is a trademark of Pandora Media, Inc. Pinterest is a trademark of Pinterest. Python is a trademark of Python Software Foundation. BlackBerry is a trademark of Research In Motion Limited. Samsung and SmartThings are trademarks of Samsung. OpenGL is a trademark of Silicon Graphics, Inc. Snapchat is a trademark of Snapchat, Inc. Spotify is a trademark of Spotify. PlayStation is a trademark of Sony Computer Entertainment America LLC. SwiftKey is a trademark of TouchType Ltd. Twitter is a trademark of Twitter, Inc. Verizon is a trademark of Verizon Communications Inc. VSCO Cam is a trademark of the Visual Supply Company. Minuum is a trademark of Whirlscape.</div>