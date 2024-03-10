---
layout: post
title: watchOS gets less complicated with complications & dock
date: 2016-10-04
attribution: true
original_site: Punchkick
original_url: https://www.punchkick.com/blog/2016/10/04/watchos-gets-less-complicated-with-complications-the-dock
image: /assets/apple-watch-dock-hero.jpg
---
![](/assets/apple-watch-dock-hero.jpg)

The first thing users experience on Apple Watch is their watch face, one of a select handful of Apple-designed home screens that display snippets of information or images around the prominent feature of the current time. But beyond the user experience surrounding the Apple Watch watch face has always been excessively overwrought and complicated—and not just because users can add “complications” to their watch faces.

Users could swipe down to access their notification drawer. They could swipe up to access a row of “Glances,” individual views provided by their favorite applications that offered information at a glance. They could tap the side button to send messages to their favorite contacts, and further tap the Digital Crown to access their honeycomb home screen of app icons. Scrubbing the Digital Crown on the home screen in watchOS 2 accessed Time Travel, which fast-forwarded complications into the future. It was all a little much, and very confusing to users accustomed to the simplicity of the iOS lock screen.

With watchOS 3, most of that functionality is gone, or rearranged. Instead, Apple has dramatically streamlined system-level navigation on watchOS to make the platform smoother and easier to use. With the new emphasis on efficiency and intuitive interface design, Apple has dramatically improved both performance and ease of use with this latest release by repurposing complications on the watch face and axing many areas of the lock screen UX altogether. For third-party iOS app developers, this means watchOS apps might actually be used in watchOS 3.

> For third-party iOS app developers, these changes to how watchOS organizes its content and shortcuts to apps mean watchOS apps might actually be used in watchOS 3.

## Complications have new potential—and aren't as complicated

Since watchOS 1, users have been able to add “complications,” watch parlance for information on the watch face beyond the time, that show weather data, calendar events, or progress toward fitness goals. And since watchOS 2, third-party iOS app developers have had an API to offer users complications of their own, surfacing up-to-the-moment data from users’ favorite apps. Now, with watchOS 3, complications are significantly simpler, and can instead offer basic shortcuts into third-party applications directly from the first screen that Apple Watch users see.

Rather than solely being expected to surface some snippet of data in a tiny visual representation on the watch face, third-party watchOS apps can now simply present a shortcut into their application from the watch face, eliminating the time it once took for users to find and launch these apps from the watchOS home screen. This instantaneous accessibility alone is an enormous boon for watchOS app developers, especially considering that users measure the amount of time it takes to complete a task in seconds, rather than minutes, on the Apple Watch.

> Smart use of complications in watchOS 3 can reduce the time it takes to use a watchOS app from minutes to zero seconds.

However, iOS app developers can also deep-link their newfangled complications into specific views within their watchOS apps, allowing users to quickly initiate a workout or perform another task with one tap, effectively reducing the time it takes to find, launch, and navigate a watchOS app to find the feature you want from several dozens of seconds to zero. And because watchOS 3 keeps apps that are represented in complications constantly available in on-board memory, they launch instantly and load refreshed data from throughout the day.

> The Dock is the best UX idea Apple could have imported from macOS

Previously in watchOS, Apple Watch app developers had two opportunities to surface app views to users. First, there was the app itself, discoverable from the honeycomb-style home screen icon view and home to sophisticated features and information hierarchy. Second was Glances, which was accessible from a swipe up on the watch face and presented a static view of data from the application itself. In watchOS 3, Glances are no more, and instead users can quickly access a row of commonly used applications by tapping the side button beneath the Digital Crown.

The Dock presents a “snapshot” of the app as preserved in memory, which the app can update routinely throughout the day with new information. However, unlike the singular view that Glances could provide, which could link into an entirely different view within the application, the snapshot that appears within the Dock is the primary view of the application, and will resume instantly when a user selects it. This means that third-party iOS developers need to reevaluate their apps’ primary views to be optimized for the Dock, presenting large data visualizations and stats in a format that users can quickly digest at a glance.

> watchOS 3 is simpler and faster—which means it’s the biggest opportunity yet for watchOS developers to connect with a new and growing audience.

With the changes to how watchOS handles launching apps from the watch face and from the new Dock, users will feel performance that was always possible under the hood. Because watchOS 3 is smarter about retaining application states in RAM, even users with the first-generation Apple Watch will feel a significant performance boost with their favorite watchOS apps in watchOS 3. This is an enormous win for watchOS developers, because the biggest obstacle to users adopting and relying upon third-party Apple Watch apps was the latency with which the apps needed to update their data. watchOS apps are snappier in watchOS 3, and the time savings from a UX perspective should have an impact on developers’ willingness to explore the platform.