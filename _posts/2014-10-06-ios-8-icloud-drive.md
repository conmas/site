---
layout: post
title: iCloud Drive demystifies backup
date: 2014-10-06
permalink: /ios-8-icloud-drive
attribution: true
original_site: Punchkick
original_url: https://www.punchkick.com/software/ios/2014/10/06/ios-8-in-context-icloud-drive-demystifies-backup
image: /assets/ios-8-icloud-drive.jpg
---
![](/assets/ios-8-icloud-drive.jpg)

{% include ios-8-intro.html %}

## iCloud Drive

The ubiquity of cloud-storage products like Dropbox and Google Drive might suggest that Apple is late to the game, but its roots in internet-connected file storage solutions date back further than both. To empower file sharing for .Mac customers in the early 2000s, Apple introduced a rudimentary cloud-based virtual storage product called iDisk. iDisk automatically synced any type of file—PDFs, Word documents, and more—between compatible Macs directly in the Finder window. MobileMe subscribers, after Apple evolved the .Mac service in 2008, were gifted 20GB of iDisk storage to back up their systems and share files between Macs. Power features like WebDAV volume accessibility made iDisk a hit with Apple enthusiasts, but its $99 price tag as part of the underpowered and unreliable MobileMe package limited its growth beyond established customer bases.

![](/assets/icloud-drive-ios-devices.png)

When Dropbox took the scene in 2008, its offering of free storage with fast upward expandability caught on quickly with cloud-eager consumers. Its explosive popularity stemmed from an invite-to-enhance model, which encouraged users to invite their friends and colleagues in exchange for free bumps in their storage cap. Dropbox was followed by several startup cloud storage companies, but its volume of free features and ease of use between Macs and PCs made it a preferable option to a product as limited as iDisk. iDisk’s final blow came when Dropbox and others introduced mobile apps for Apple’s own platform, signaling a lack of focus for the iPhone giant. As the company sought to build out its iOS ecosystem, it did so at the expense of less popular niche products like iDisk. Now, third parties were developing better storage applications for Apple’s own platforms than Apple could. When Steve Jobs announced [iCloud in 2011](/ios-8-cloudkit), iDisk was nowhere to be found—instead, iCloud documents could be synced between individual apps, not in one continuous shared cloud volume.

At this year’s WWDC, Tim Cook and Craig Federighi announced the addition of iCloud Drive, a synthesis of iDisk’s all-files-in-one-synced-folder and iCloud’s app-files-in-app-silos models. This dual approach ensures compatibility with past and future versions of iCloud-compatible apps, and by building on iOS 8’s CloudKit can unlock an entirely new avenue for productivity apps between OS X and iOS platforms. Whereas Dropbox files are locked away in their iOS app and inaccessible to system apps—unusable as attachments in Mail or for sharing between productivity apps—iCloud Drive promises to make all contained folders and files discoverable across applications. iCloud Drive isn’t just Apple catching up with the cloud storage competition—it provides completely new end-user benefits based on innovative first-party integration with iOS and OS X apps. 

### Command-C

Apple’s competition in the cloud storage space isn’t limited to Dropbox. Besides similar storage startups, both Microsoft and Google have entered the fray with OneDrive and Google Drive, respectively. Apple’s rivals have tightly integrated both of their solutions into Windows and Android, allowing for accessible attachments and photos across mobile applications. Until now, iOS users had to opt into some combination of competitor services—for example, Dropbox and its email client Mailbox or Google Drive plus Gmail—to take advantage of this level of continuity. With iCloud Drive, iOS is getting a system-wide document picker that will integrate tightly with a whole host of first- and third-party applications.

![](/assets/iwork-in-icloud.png)

Both OneDrive (formerly SkyDrive) and Google Drive match the organization and sharing features of Dropbox, but add a layer of collaboration with friends and colleagues that Dropbox is only beginning to match. With Office 365 online and Google Docs, Sheets, and Slides, Microsoft and Google have targeted the [education](https://www.punchkick.com/blog/2014/09/22/learn-2-0-how-the-classroom-of-the-future-empowers-teachers-and-students) and enterprise markets with special business-class storage tiers. Dropbox, too, has a Dropbox for Business plan with increased storage caps and new real-time collaboration features on desktop native Office and Adobe Creative Suite apps, but lacks a contiguous cloud platform that includes email accounts, contact synchronization, or appointment tracking. Apple has dabbled with collaboration features with its iWork family of productivity apps, with the ill-fated iWork.com and its successor, iWork in iCloud on the web. While the company still doesn’t—and, based on its history, likely won’t—offer a business-class collaboration tool for iCloud and iWork, everyday Apple customers will benefit from light real-time collaborative editing and easy sharing of iWork documents to Mac, iOS, and even PC users across devices.

> iCloud Drive alleviates years of customer confusion.

iCloud Drive builds on existing cloud storage structures and modernizes Apple’s approach for a new generation of iOS and OS X. In so doing, it alleviates years of customer confusion about iCloud’s behavior and intention. Rather than siloed app folders that were invisible to OS X and iOS users outside of a particular app, iCloud Drive shows off all synchronized content in one elegant folder view. Such a folder has already existed for years—iCloud content in previous versions of OS X were stuffed away in the Mobile Documents folder, hidden away in the user Library. (Some pioneering users could create an alias for Mobile Documents to use as their own personal synchronization folder across iCloud-connected Macs, but iCloud Drive makes this convenience official and standard.) A new “iCloud Drive” option in the OS X Finder elevates the storage to the visibility that iDisk once enjoyed, and special app-specific folders coexist alongside new any-filetype-friendly root-level traditional folders. 

### Command-V

Whereas iCloud provided users a meager 5GB of default storage for all their iCloud Photo Stream content, iOS device backups, and documents in iCloud—with steeply priced storage expansion tiers to boot—iCloud Drive delivers more expansive and affordable storage options to enable Apple’s new cloud-enabled iCloud Photo Library and Drive services. The product makes clearer and easier the process of saving files both inside and outside of iCloud-connected apps, and also simplifies years of developer frustration about the behavior of iCloud documents-in-the-cloud.

![](/assets/icloud-drive-finder.jpeg)

To match the volume’s visibility on Macs, iOS users can enjoy a new Document Picker in certain iCloud-compatible apps. Apple’s mobile operating system has famously obscured the file system from users since version 1, so its iCloud Drive implementation matches existing iOS user interface language. Just like the Photo Picker, which apps like Instagram use to access photos and videos from users’ Photos app Camera Roll, a new Document Picker will allow third-party apps to access any file or folder stored in the user’s iCloud Drive storage volume. According to Punchkick iOS engineer John Norton, this implementation will provide huge value to both developers and users.

> “iCloud tools haven’t been exactly user-friendly in the past,” Norton said. “But the fact that users will be able to have data on one device and pick it up from any other is going to be absolutely huge.”

One obstacle might be discoverability, but new prompts to allow third-party apps to access iCloud Drive storage should allow a new generation of productivity apps to connect directly with users’ files and folders across multiple iOS and OS X devices. “iCloud Drive will prevent the need to move things around manually, or make unnecessary copies of things for different devices,” Norton said. “It’s one of those things people won’t believe they lived without.”

### Command-O

Thanks to its deep integration with iOS 8 and OS X, iCloud Drive will likely see widespread adoption among Apple’s massive install base of hundreds of millions of users. And because of iOS fans’ enthusiasm for apps supporting new features—and because of the App Store’s propensity to endorse and promote such apps—third-party developers of productivity or file-based apps can cash in on a wealth of new customer interest and goodwill. The Document Picker will increase visibility and ease of use for iCloud Drive among compatible apps, but a second feature might have a bigger impact on iOS customers’ everyday lives altogether.

![](/assets/cloudkit-icloud-drive.png)

In short, Apple isn’t leaving Dropbox and Google Drive out to pasture on iOS. In fact, its new Storage Provider APIs will allow these companies to set their storage solutions as possible providers to iOS customers system-wide. As part of iOS 8’s larger Extensibility features, users can now define a custom storage provider, be it OneDrive or Google Drive or Dropbox, to serve the same purposes as iCloud Drive’s document picker across the system. This will extend functionality beyond Microsoft- or Google-branded apps on iOS, and democratizes the file storage and synchronization process across cloud service solutions. Users need only to download the Google Drive, Dropbox, or OnDrive iOS application for their Storage Provider status to be accessible across the system, in Mail attachments or productivity apps like Pages, Numbers, Keynote, or Microsoft Office.

> “People will expect this kind of behavior from apps in the future,” said John Norton. “If your app isn’t ‘keeping up with the Joneses’ in terms of storage provider accessibility, it’s going to feel dated.”

Cloud storage has been liberated on iOS. Gone are the days of single-purpose cloud storage viewers that allowed for limited file sharing between iOS applications, because now even third-party solutions can provide files and folders to every necessary app on the system. With iCloud Drive, millions of iOS customers will be automatically enlisted in a robust, universal file storage and backup solution to rival competitors like Dropbox and Google Drive. And thanks to the Document Picker and Storage Provider settings, users will be empowered to define their custom storage experiences from a wealth of iOS-compatible options in coming months. Apple didn’t toss another cloud storage entrant into the void—instead, it offered a default solution and bolstered offerings from even its fiercest competitors. iCloud Drive is one of the clearest representations of Apple listening to feedback from users, developers, and partners—and it’s only the beginning.