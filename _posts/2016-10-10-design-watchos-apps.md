---
layout: post
title: Designing effective watchOS apps
date: 2016-10-10
attribution: true
original_site: Punchkick
original_url: https://www.punchkick.com/blog/2016/10/10/designing-watchos-apps-to-be-more-user-friendly-and-effective
image: /assets/apple-watch-weather.jpg
---
![]({{image}})

In the first-generation watchOS software, many of the apps third-party iOS developers made—and even many of those Apple itself made—felt like baby-sized versions of full-fledged iOS apps crammed into a two-inch Apple Watch display. Early watchOS apps featured much of the same navigation options, squeezing complex menus and folder hierarchies into a device and form factor that never should have supported them. As a result, Apple Watch apps felt sluggish, overcomplicated, and difficult to use, and for many early Apple Watch adopters, discouraged them from downloading and trying new third-party watchOS apps altogether.

This trend underscores the importance of considering how the feature set and core functionality of an iOS application should be represented on Apple Watch. The myriad use cases of smartphone applications don’t all make sense on wearable devices, which are more relevant to users in other circumstances. Even in the first generation of watchOS, the best mobile app developers were keen to [reevaluate their feature set](https://www.punchkick.com/blog/2015/05/21/how-to-extend-your-ios-app-brand-experience-to-apple-watch) and content architectures to make an expedient and effective watchOS app. Now, with Apple’s strategic changes in watchOS 3, this emphasis on quick utility and lightweight interactivity is more important than ever.

Apple Watch is an all-new form factor, and with it come all-new constraints around user expectations, interface usability, and discoverability of key features. In order to make an effective and user-centric app that makes an impact on a two-inch screen on users’ wrists, the best iOS app developers need to rethink long-held assumptions around navigation paradigms and content architecture. Thankfully, with watchOS 3 and Apple Watch Series 2, Apple’s recommended best practices have never been more timely.

> The best iOS app developers need to rethink long-held UX assumptions to develop a watchOS app that makes an impact.

## Navigating the new best practices for navigation

Combined with the technical performance improvements in watchOS 3, which optimize memory utilization to keep commonly used apps persistently in the device’s RAM, the new design aesthetic from Apple recommends a simplified and flattened navigation paradigm for watchOS apps themselves. Rather than organizing Apple Watch apps like iPhone apps—where users drill down into a menu item, into another menu item, and see their content—watchOS apps are encouraged to be flatter, with fewer clicks separating users from their content. Instead, users will be able to scroll through views within the first item in the table view menu, jumping vertically through screens and content by simply rotating the Digital Crown.

This flatter organizational structure fits in with other changes in watchOS 3—namely, users can pin a running app to their Dock and expect a relevant preview of in-app content when switching between apps. This means that main screens need to be more information-dense, and that users have new expectations to get more content with less interaction. One click should be the maximum gap that separates users from lifting their wrist and seeing the content they need—and improvements to app extensions like the [Dock and watch face Complications](/2016/10/04/watchos-complications-dock) accelerate that end.

> With watchOS 3, Apple Watch users will expect to get more information with less interaction than before.

Reorganizing watchOS app navigation and content to work better on watchOS 3 is a worthwhile exercise, and can help even the best iOS app developers evaluate the content and functionality within existing Apple Watch apps that might be superfluous. Honing in on the core functionality that makes the watchOS version of an app useful can have a halo effect on the entire product’s UX design, helping users access the key parts of an iOS or watchOS app more efficiently and consistently.

> Rethinking a watchOS app UX is a worthwhile exercise that can help app developers understand the key features that make an app impactful.

## Apple Watch apps should be useful within two seconds

Apple’s biggest piece of advice for Apple Watch app developers is that any interaction with watchOS apps—from launching the initial view through accessing a piece of relevant data—should occur in under two seconds. New watchOS features like Complications that can launch apps and views within the Dock that offer glanceable content help app developers achieve this goal, but developmental performance improvements and UX–driven changes to information hierarchy can take this effort a step further.

In the interest of building Apple Watch apps that feel as fluid and responsive as watchOS users demand, it’s critically important that developers adopt [native Apple Watch apps](https://www.punchkick.com/blog/2015/07/14/what-you-need-to-know-about-watchos-2) in this third version of watchOS. These apps can run independently of iPhone, and are much faster at presenting their in-app content regardless of the user’s data connection. This loading time reduction is essential in achieving the two-second goal, seeing as a combination of underpowered hardware and a reliance on [WatchKit extension performance](https://www.punchkick.com/blog/2014/11/19/watchkit-gives-an-early-glimpse-into-how-apple-watch-works) often made watchOS 1 apps feel sluggish.

> To offer the performance and UX that Apple Watch users expect, it’s critical that watchOS app developers build native apps for Apple Watch.

In many ways, watchOS 3 and Apple Watch Series 2 delivers on the performance and usability promises that the first-generation Apple Watch failed to fulfill. Whereas users of the first Apple Watch might not have made third-party watchOS apps part of their daily routines for a variety of reasons—performance, connectivity, functionality—the improvements made in watchOS 3 help deliver a consistent and delightful user experience across watchOS, including third-party apps. Maybe now that it won’t take minutes to load, some of us will actually hail an Uber from our wrists.