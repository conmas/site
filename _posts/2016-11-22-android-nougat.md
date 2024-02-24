---
layout: post
date: 2016-11-22
title: What’s new in Android Nougat
---

![](/assets/android-nougat.jpg)

## How we got here

With a dominant share of the global smartphone market, Android has grown to become the defining mobile platform for more than a billion people. Android powers not only some of the most sophisticated, but also some of the most accessible mobile devices available, with a dizzying array of different form factors, screen sizes, and processor sets under its umbrella.

But that level of diversity, which Google touts as a strength of its platform, also introduces its own challenges. Android needs to accommodate a nearly infinite array of possible use cases and end-user contexts, and cooperate with smartphone manufacturers to deliver its updates to the masses. In the past, this has introduced a fair amount of fragmentation challenges for many Android users. With its recent releases, Google is doing its best to make the latest and greatest software available to everyone.

> Maintaining such a diverse platform introduces its own set of challenges, but Google is striving to bring the latest version of Android to as many users as possible.

With Nougat, Android's 7.0 release that's rolling out to top-of-the-line handsets over the next few months, Google seems intent on shoring up many of Android's loosest edges. There are better ways for developers to handle screen sizes, smarter and more powerful notification managers, and the first signs of a whole new computing platform on the horizon.

With improvements to security, the updating process, and many UX features that impact every user, Google has elevated the Android experience and poised its platform to grow in many new directions. Building a great app for Android means planning for an incredibly wide array of circumstances. With Android Nougat, Google has managed to make that task much simpler for third-party Android developers.

## Designing Android apps for every screen—and half-screen

One of the many Android-first features that have placed its top devices above the competition is multitasking, or the various ways Samsung and other smartphone makers have allowed users to use multiple apps simultaneously. On larger devices like the Galaxy Note line,[^1] the company pioneered picture-in-picture video and split-screen multitasking features that took advantage of the phablet's massive display. It was a top-tier feature for a top-tier smartphone, and the functionality has been copied by many of Samsung's competitors.

With Android Nougat, Google is making this split-screen functionality available to all Android smartphones, introducing a new window manager that allows users to place any supported apps into half-screen views. Android apps that are optimized for the new format—often those made by the best Android developers—can be placed into a multi-window mode that allows for fluid multitasking between apps. It's one of a few new ways Android users can use multiple apps more quickly—and is an indication of the kind of powerful features Google wants its platform to support across all devices.

 > Multi-window modes and the redesigned Overview window manager help every Android phone deliver the powerful multitasking features that were once reserved for only top-end phones.
 
These changes transform the idea of what Android apps can be, and evolve the operating system from its one-app-at-a-time roots to a fully windowed experience with much more customizability. Android is striving to be the operating system that supplants Windows and Chrome OS as many users' daily driver. In order to do that, Google has opted to rethink how apps coexist and interact with one another.
 
### Implementing multi-window mode

When Samsung implemented split-screen multitasking three years ago, only a handful of apps supported the feature. With Google's prioritization of multi-window features in Android 7, now the entire app ecosystem has an opportunity to jump on board. Of course, Android tablets will benefit the most from this change, obviating the oft-criticized handling of mobile app layouts at larger display sizes. But the exciting thing for Android developers is that, as a halo effect of working to support multi-window mode, every app should look better across every device.

In practice, multi-window mode operates much like split-screen multitasking does in iOS 9 and later. Assuming the third-party Android app is optimized for split-screen layouts, users will see it within their Overview app switcher when arranging their apps. Like iOS 9 on iPad, apps can be arranged at one-third, two-thirds, or half of the screen, with a second app taking up the rest. And similar to iOS's approach, the top-most or left-most app when in split-screen—depending on the user's device orientation—takes priority for certain functionality.

> Thanks to how Android has planned for different device sizes and display types since day one, there's very little work to be done optimizing Android apps for multi-window mode.

The good news is, there's very little work to be done optimizing Android apps for multi-window mode. Because Android apps have handled layouts for multiple device sizes since the beginning, the platform doesn't share many of the challenges that are solved by tools like Auto Layout on iOS. Instead, Android developers simply need to target the latest API level for Nougat, and their apps will be eligible to work alongside others in multi-window mode.

However, there are some user experience considerations to keep in mind with how the new version of Android handles window management. Developers need to anticipate that their app might not be the primary app on users' screens, and might be used in conjunction with other apps routinely throughout users' days. It's critically important that apps for any platform anticipate the different contexts within which users might be approaching them, and especially for productivity-focused apps that target Android tablet users, multi-window mode is a big deal.

### Picture-in-picture, plus Android TV

Another logical extension of the multitasking theme is into video, and Android TV now supports picture-in-picture video that plays in a little window above other apps. This allows users to stream content from YouTube or Netflix while multitasking in other apps or games on their Android TV, and particularly enhances the content consumption experience on the platform. And for many content streaming apps, this picture-in-picture experience works out of the box.

For video content apps, it's imperative to make the update to support picture-in-picture, which again comes down to targeting the appropriate version of the Google Play Services API level for Nougat. Android TV is home to a host of apps and games, many of which focus on video streaming content, but many others that aim to make the platform more useful and fun. Now, the most exciting prospect of a smart TV operating system—unifying the second-screen experience and offering context alongside content—is baked into the platform.

> Now, the most compelling use of a smart TV platform is baked into Android TV: unifying the second-screen experience and offering context alongside content.

The multi-window and multitasking features represent the maturation of Android as a platform, and also illustrate Google's enormous ambitions for its operating system. Android is now absorbing features once reserved for full-fledged desktop operating systems like Windows, and approaching the kind of power-user functionality that could make it a viable replacement to some traditional workstations. The introduction of a complete windowed version of Android—[accessible using developer tools](http://arstechnica.com/gadgets/2016/08/android-7-0-nougat-review-do-more-on-your-gigantic-smartphone/3/#h2)—also suggest a new direction for Android.

As Google's ongoing product strategy [[2016-10-11-google-pixel-unifies-android-ux|comes into focus]], it's apparent that the company sees Android as the platform that will support all of its divergent endeavors into virtual reality, laptop computers, wearables, televisions, and more. But as the company continues to make Android more and more sophisticated to support these new product categories, millions of Android users and developers—particularly those focused on tablets—will reap the collateral benefits of Google's projects.

![](/assets/android-nougat-notifications.jpg)

## Delivering smarter, more powerful interactive notifications on Android

Notifications have evolved from a nice-to-have feature for SMS messaging to an essential part of the modern smartphone user experience. Whereas alarms and text messages were previously spurious distractions, many of the core apps millions of people rely upon communicate predominantly via push notifications—how else would people know to look for their arriving Uber ride?

As more and more third-party apps have begun using push notifications to deliver important information, both the iOS and Android platforms have struggled with the best way to deliver notifications to their users. Android found a winning formula first with its notifications shade that users could slide down from the top of the screen, and over the years has iterated on this design paradigm with new types of interactivity and sophistication.

But in the past several years, the kinds of behaviors users expect of their app-sent notifications have changed dramatically. With the introduction of interactive notifications with quick actions embedded in the notification card, notifications have evolved from a basic missive of information to an actionable and valuable part of the Android app user experience. Users can now interact directly with their apps from the convenience of their lock screen, or even from the notification shade while running a different app.  

> These enhancements to notification systems on Android underscore an emerging theme: the notifications *are* the app.

Notifications are a critical part of the mobile user experience, and [Android's rivals have paid similar attention](https://www.punchkick.com/blog/2016/09/13/thinking-post-app-interactivity-with-ios-10-notifications) to enhancing their functionality for the contexts and use cases of 2016. With Android Nougat, Google has doubled down on the paradigm that users don't need to open an actual app anymore to get value: the notifications can serve that purpose in a more convenient and expedient way. These are notifications designed for a post-app environment—and even the best Android developers have only just begun to realize its potential.

### Notifications, brought to you by Android Wear

When Google designed Android Wear to power a new generation of wearable products, it needed to rethink some of the core aspects of Android user experience to address this new form factor and its unique context. Users wouldn't want to launch an app on their smartwatch and navigate through menus to get things done—they would need to immediately act on information as soon as it became relevant to them. Users didn't want to scroll through endless lists of messages on a two-inch screen—they'd want a summarized view that helped them act quickly.

For these reasons, Google designed a new notification system for Android Wear that prioritized efficiency and the ability to make quick actions. Users could interact with buttons on the notifications just like on Android, but also could compose responses to text messages and perform other actions right from the notification itself. This was a recognition that opening a full native Android app on Android Wear is the death of efficiency—and a direction that better aligns with how users expect to use wearable products.

Like Android Wear, Android Nougat brings these conveniences to the smartphone and tablet form factor. Notifications from the same app are now organized into bundles, so users can easily browse a list of notifications from a wide array of different apps and dive into the app they're most interested in. Interactive notifications are now always assumed, and the new design of notification cards removes some of the chrome that limited available screen real estate.

> The new design and organization of notifications in Android Nougat is an acknowledgement that the same conveniences and efficiencies that make sense on wearable products extend to smartphones, as well.

In total, these subtle changes to the appearance and organization of notifications might seem minor. But they go a long way to make notifications more usable and actionable to end users. For third-party Android developers, there are now convenient ways for users to assess, organize, and act upon notifications from their apps, removing some of the stigma of using notifications to communicate with them. And other additions to the notification system help extend the app's functionality into the notification shade for the better.

### Direct Replies in interactive Android notifications

Perhaps the most useful component of Android Wear's approach to notifications were the Direct Replies it enabled with its on-screen keyboard and text input tools. Directly from users' wrists, they could immediately respond to chat messages as they came in as notifications, using the on-screen Android Wear keyboard,[^2] or a gesture-based text input method.

In Android Nougat, that convenience now extends to the lock screen and notifications drawer on Android smartphones and tablets. While Android users will benefit from the ability to quickly and directly reply to incoming messages from the notification shade, third-party Android developers can extend their apps' functionality to the notification and allow for real-time chat experiences from outside their messaging app.

> The best Android app developers can extend their apps' functionality to the notification, thereby powering real-time chat experiences from outside their messaging apps.

Considering that messaging apps account for the majority of users' behavior on their smartphones,[^3] it's no surprise that Google prioritized features that make those experiences more fluid and natural across their platform. But like the new notification-contained views for apps in iOS 10, Android Nougat notifications allow for sophisticated back-and-forth conversations directly within the notification itself, without the user ever needing to open the full app to participate.

> With an increasing number of extension opportunities across the OS for Android app developers, there are fewer reasons than ever that a user would need to actually open an app.

In essence, these enhancements to the notification function on Android 7 indicate Google's embrace of the notifications trend mobile has seen over the past few years. With an increasing number of extension points across both the iOS and Android platforms—from [dynamic widgets](https://www.punchkick.com/blog/2016/09/27/widgets-in-ios-10-make-your-iphone-feel-more-like-an-apple-watch) and [wearable versions of an app](https://www.punchkick.com/blog/2016/10/18/how-to-build-more-useful-and-engaging-apple-watch-apps-with-watchos-3) to [extensions within system apps](https://www.punchkick.com/blog/2016/09/20/whats-new-for-maps-in-ios-10-and-why-marketers-should-care) and richer interactive notifications—there are fewer reasons than ever for a user to actually need to open an app. On a platform where ease of use and process efficiency are everything, this trend of app decentralization is a massive benefit to users and an enormous opportunity for Android developers.

![Promotional image of a woman wearing an Android Daydream virtual reality headset, looking out at a stylized cartoon forest, holding a controller.](/assets/android-daydream.png)

## Android becomes a virtual reality platform with Daydream

Alongside its other improvements and new features, with Android Nougat Google introduced the first version of a virtual reality platform built on top of Android called Daydream. Android Daydream is a suite of APIs that can power virtual reality experiences within the Android ecosystem, seeking to standardize the myriad VR products and services that have cropped up from HTC, Samsung, and others in recent years.

Daydream allows Android developers to build powerful virtual reality experiences on the platform, and streamlines the development of immersive virtual worlds for the best Android apps. For VR hardware, rather than requiring an expensive computer rig with a specialized headset like Oculus, Daydream is designed to work with Android smartphones meeting certain specifications. Because of this accessibility, and because it's built upon the most popular operating system in the world, Android Daydream is well positioned to define what the next big computing platform looks like with virtual reality.

> Android Daydream is well positioned to define what the next big computing platform looks like: virtual reality.

With Android Nougat, compatible smartphones can enter a VR Mode that prioritizes graphics performance and takes care of many of the challenges of virtual reality—namely head-tracking, stereoscopic vision, and image latency. As the spiritual successor to Google's Cardboard SDK, Daydream is intended to make developing Android-specific virtual reality experiences seamless and efficient for Android developers.

But we've seen this before. Every few years a new computing platform emerges that is said to redefine everything, to completely transform how we use mobile devices and how we interact with technology (ahem, wearables). Why is virtual reality any different? It certainly remains to be seen how prevalent the technology becomes, but VR in and of itself is an entirely new way to think about personal computing, and turns many of the long-held assumptions about how users engage with interfaces on their head—literally.

### What does virtual reality on Android mean for Android app developers?

Virtual reality itself is an exciting prospect, but perhaps more exciting is how Google is bringing its solution to market. Because the company has a long history of partnering with smartphone OEMs to bring top-of-the-line Android user experiences to the masses, it's prescribing a strict set of guidelines for devices that can support Android Daydream called the [Android Compatibility Definition Document](https://source.android.com/compatibility/cdd.html).

These benchmarks set requirements for the most powerful Android devices, in the hopes that more of them will meet the specifications to power an Android Daydream headset. AMOLED displays above a certain resolution, mobile systems-on-chips above a certain level of performance, and more requirements help to ensure that high-end Android smartphones are up to the task of displaying the 3D graphics necessary to simulate a virtual world.

> The halo effect of these Android device specifications is a degree of standardization across the Android hardware industry. 

For a platform that prides itself on diversity, it might seem counterintuitive that Google would prescribe such high benchmarks for performance, and such staunch guidelines about how Daydream–compatible headsets can be designed. But the halo effect of these Android device specifications is a degree of standardization across the Android hardware industry, a trend that will only benefit end users and developers. As Android smartphone manufacturers adapt their product offerings to support these new Daydream specs, it will be easier over time to assume that users have a smartphone capable of high graphics performance.

### Where does Android Daydream make sense?
  
The first and most obvious application of virtual reality technology is gaming, and Android Daydream is sure to power some high-performance games that succeed in transporting VR headset wearers to other worlds. Beyond that, the next most obvious examples are other forms of entertainment, like video streaming services or live concerts. But for the bulk of Android app developers, whose products or services are more focused on productivity or commerce than entertainment, how does the Daydream world make sense?

> Traditional user interfaces simply don't make sense in virtual reality, but that doesn't stop developers from trying.

Many developers have begun adapting their Android app user interfaces for virtual reality, and assumed that the user's head tracking could serve as a virtual cursor. Point your face up to hover over an item above your field of view. Tap on the remote to select. It's a sloppy translation, as traditional user interfaces simply don't make intuitive sense in a VR context, but it's among the first of many experiments that will help to define the UX best practices that virtual reality developers will come to standardize.

For now, it's worth considering how even traditional Android user experiences could make the jump to VR. Perhaps an ecommerce fashion app could empower users to try on their clothes in a virtual dressing room. Maybe travel apps could give virtual sightseeing tours, or hotel apps could offer 3D models of their rooms before reserving. Many of the ideas for VR experiences are strained today, but as the technology matures and becomes a larger part of many users' lives, it promises to become expected.

> Many ideas for VR versions of existing apps are strained, but as the technology becomes more ubiquitous, they'll begin to be expected.

There are many directions that the next phase of mobile user experiences could take us, and virtual reality is perhaps the most extreme among those that technology companies are exploring today. And while the mobile user experience that defines 2026 might be drastically different than any that current technology companies have envisioned, it will almost certainly continue the trend of removing software barriers between users and their content. If virtual reality is a first stab in this direction, then it's worth immersing ourselves in.

## Where we’re going

With Android Nougat, Google has more stridently than ever set out to define Android as the platform that will power the company's future. From its wide-ranging enhancements that make it more powerful for tablet (and maybe desktop) users, to subtle refinements that borrow from its wearable cousin, to promising new platforms that have only begun to blossom, Android has become increasingly complex and increasingly home to a wider array of use cases and contexts.

> Android is becoming increasingly complex and powerful to accommodate an enormous number of new form factors, use cases, development initiatives, and contexts.

Whereas [Apple seems intent on developing independent operating systems](/2016/11/08/google-pixel-microsoft-surface) for each of its product lines, Google is confident that Android is versatile enough to power all of its initiatives in the coming decade. From Android Auto to Android Wear, Android TV to Daydream, the operating system has grown to encompass every element of what Google's promise of the future includes.

For Android developers of all stripes, Google's bullishness on the platform is something of a dream come true. The same applications that offer great mobile user experiences can share code with ones that run on TVs, and cars, and watches, and VR headsets. As Android continues to evolve and define the user experience of more of Google's product lines, the opportunities for Android developers will only come into sharper focus. And until that point, Android developers can continue to prioritize mobile user experiences that work well together, while they might not be the same.

> This post was originally published as a three-part series on [punchkick.com](https://www.punchkick.com/blog/2016/11/22/designing-android-apps-to-fit-every-screen-and-half-screen).

[^1]: Before its ill-fated 7th iteration.
[^2]: Which is admittedly silly given that most Android Wear devices have a screen smaller than two inches.
[^3]: And considering that Google itself develops a number of overlapping chat services, including the stock Android Messenger, Google Hangouts, and the new Google Allo.