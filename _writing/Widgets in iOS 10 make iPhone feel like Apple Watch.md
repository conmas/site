---
layout: writing
title: Widgets in iOS 10 make iPhone feel like Apple Watch
date: 2016-09-27
attribution: true
original_site: "[[Punchkick]]"
original_url: https://www.punchkick.com/blog/2016/09/27/widgets-in-ios-10-make-your-iphone-feel-more-like-an-apple-watch
image: /assets/ios-10-widgets.jpg
image_alt: A picture of an iPhone on a table next to the window of a skyscraper, overlooking Millennium Park in downtown Chicago, with iOS 10 Notification Center widgets shown on its screen.
---

The concept of a widget isn’t anything new—it’s an ugly word that has graced everything from product marketing to a headline feature of Mac OS X Tiger in 2005. In the early days of Android and the smartphone platform wars, when Google’s platform sought to differentiate itself from iOS, one of its key points of distinction was the presence of widgets, the modular and customizable applets that populated Android users’ lock screens and home screens. They were emblematic of how much more “open” and customizable the Android platform as a whole was, and so Apple saw fit to address the feature gap in iOS 8.

But widgets in iOS 8 were a strange half-measure: they were only available within Notification Center, a part of the iOS user experience that many people seldom used. They were predominantly static views of one piece of data, which sometimes felt stale. And, above all else, they were rather undiscoverable, relying on users opening an “Edit” menu at the bottom of the Notification Center Today view. While widgets were an interesting idea for iOS power users, and perhaps one of the first powerful examples of iOS 8’s Extensibility, the value proposition for both users and developers was always a bit murky.

But Apple learned a lot about what kinds of glanceable information people rely upon with Apple Watch, and the Glances feature from watchOS 2 and earlier. While Glances were too pure for this world, getting the axe in watchOS 3 this year, their aesthetic and user experience direction was imported to a new position of prominence in every corner of iOS. For this reason alone, that widgets are accessible from no less than four major areas of the iOS system UX, there’s never been a better time or rationale for third-party developers to explore implementing them.

## What’s New in widgets

Like notifications, widgets received a significant functionality upgrade in iOS 10. Whereas in previous versions of iOS, clicking on the content within a widget would simply link users to the relevant content within the app, users can now interact directly with widgets in a variety of ways. Users can now expand each widget to “Show More,” prompting the widget to nearly triple in height within the vertical stack of widgets and present significantly more content and information. With SpriteKit and SceneKit animations, widgets can have more fluid and engaging visuals than ever before, lending a new degree of dynamism and vitality to the presentation of data and content. And widgets can even contain streaming video, meaning users can tap playheads within widgets to tune into live games or other web videos directly from the widgets pane.

> Whereas widgets in previous versions of iOS were simple deep links to in-app content, users can interact directly with iOS 10 widgets in a variety of ways.

But more significant than what widgets in iOS 10 can do is where they can do it. The widgets stack has graduated from the Today view within Notification Center and now exists to the left of both the lock screen and the home screen. This lends an increased level of visibility to widgets than any previous version is iOS, and the prevalence of this feature within Apple’s own system apps—like Music, Maps, and Calendar—should familiarize users with the widgets interaction paradigm quickly.

Further, widgets are now available directly from the home screen alongside Quick Actions, accessible via 3D Touch. The feature is limited to iPhone 6s and later, but introduces an entirely new way for users to discover widgets and add them to their lock screen with one tap. Of course, the feature is intended to make 3D Touch more useful, given that the headline feature of Apple’s 2015 phone has seen sluggish adoption among third-party developers. But contrasted against the sneaky Edit menu for widgets within the Notification Center Today view in iOS 8, users’ ability to find and add widgets just by poking around on their home screen is a phase change for the discoverability of the feature.

## Developers should adopt (or rethink) widgets for their apps

Well this new functionality might be part of Apple’s broader strategy to both increase the utility of the lock screen and introduce creative new uses for 3D Touch throughout the operating system, developers stand to benefit from this new opportunity as well. Just as notifications in iOS 10 offer incredible new ways for developers to connect with their audiences across the operating system, widgets are another extension point through which third-party developers can extend the functionality of their apps and offer value to their customers in all-new arenas. Now, the inside of an app container isn’t the only avenue for developers to communicate important information to their users. With the ever-increasing scope of extensibility features in iOS, developers have more and more tools by which they can make a connection.

> With the ever-increasing scope of extensibility features in iOS, developers have more and more avenues to connect with their audiences.

And for developers who have already invested in widgets for their app, targeting the iOS 8 and 9 versions that inhabited Notification Center, there’s little work to be done to take advantage of these new capabilities. Old widgets automatically work with their new presentation style in iOS 10, and a minimal amount of developer effort can implement new functionality like Show More. Considering the ubiquity of widgets within Apple’s own system apps—being added to apps that have never had use for widgets like Music, Podcasts, Photos, and more—it would appear that users are going to become more accustomed to widgets than ever before.

The relative success of Apple Watch has demonstrated users need for lightweight interactivity and glanceable information at a moment’s notice. Widgets in iOS 10 deliver on that promise where watchOS failed, making the Notification Center Today view and all of its descendants on the lock screen and home screen legitimately useful for perhaps the first time. More and more third-party apps from the App Store begin to adopt these features, users familiarity with and expectations for widgets will continue to grow. While Android may have edged out Apple in launching widgets in the early days of the platform wars, iOS 10 might be the first time they’re accessible, discoverable, and legitimately useful to a wide swath of mobile customers.
