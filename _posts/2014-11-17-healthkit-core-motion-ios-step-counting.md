---
date: 2014-11-17
title: Comparing HealthKit & Core Motion for step-counting iOS apps
---

![](assets/health-ios-8.png)

iOS 8 introduced the HealthKit framework and its own Health app to allow users to track and monitor over sixty measurements, including steps, blood pressure, heart rate, and even caffeine consumption. Apple is allowing developers to create applications that request and share health data with the rest of its ecosystem. Apple does its part by sharing measurements the hardware can detect such as steps and distance walked. The barometers in iPhone 6 and iPhone 6 Plus take this a step further by reporting flights of stairs climbed.

Sound familiar? iOS 7 also provided some very similar functionality with the Core Motion framework. The iPhone 5S introduced the M7 motion coprocessor to track, store, and provide incredibly fast access to these statistics in applications. The M8 coprocessor is Apple’s next iteration, which includes the barometer on newer iPhones. The Health app didn’t exist a year ago, but many developers found plenty of creative ways to showcase this data.  

Now developers have two options to create step and distance tracking applications: HealthKit and Core Motion. They both provide similar activity data with some caveats. Neither is superior to the other in every aspect, so it’s important for developers to recognize the parameters of the application you would like to build. Later, we will provide some hypothetical use cases for displaying this data and comparing the time it takes the system to supply this data between the two frameworks. The goal of this is to help developers create powerful and efficient applications by choosing the correct framework for their needs.

![](assets/healthkit-apps.png)
> Apple's official Health app in iOS 8, third-party fitness app Breeze, and an in-app modal view for apps to request access to HealthKit data.

## HealthKit

If your application utilizes more than just steps, distance, or flights of stairs, you’ll need to use HealthKit to access many more measurements than Core Motion. You simply need to gather a list of measurements you would like to track and request authorization from the user. HealthKit has the benefit of storing health data for an indefinite amount of time. Any app that has been granted access can fetch data ever since a user installed iOS 8 and begun recording data. The M7 & M8 motion coprocessors mentioned earlier started sending their data to HealthKit where they can be viewed in the Health app. Other wearables, like the Jawbone Up or Fitbit products, have the opportunity to write to HealthKit, but not all activity apps and hardware have jumped at the chance to support HealthKit.

Both users and applications have the ability to manipulate data, meaning users themselves have the ability to record or delete their own statistics manually within the Health app. It’s up to applications reading the data to trust the accuracy of the results. The opposite scenario can also occur, if malicious applications record erroneous data into HealthKit—but Apple has secured HealthKit permissions to protect a user and their privacy.[^1] As of iOS 8.1, Health data also is not persisted when a user backs up their phone’s data and restores it at a later date.

## Core Motion

Core Motion acts as a pedometer that can access your steps, distance, and flights of stairs. Since it talks directly to the M7 or M8 motion coprocessor, Core Motion is incredibly fast, but it does have its own limitations. Similar to HealthKit, Core Motion data needs to request permission from the user and cannot be synced across devices. Core Motion also only stores data from the past week, as opposed to HealthKit’s ability to store them for an indefinite amount of time. Although it has many more limitations than HealthKit, Core Motion’s speed in retrieving activity data should not be overlooked.

Each set of APIs provides methods to retrieve data from their respective stores. Core Motion provides a simple API with two types of queries. Apple maintains documentation on the Core Motion Pedometer, [which can be found here](https://developer.apple.com/LIBRARY/ios/documentation/CoreMotion/Reference/CMPedometer_class/index.html#//apple_ref/occ/cl/CMPedometer). 

## Types of Queries

One query is a simple data range, where developers specify a start and stop time. Developers receive a `CMPedometer` object in the completion handler that provides access to steps, distance, and flights of stairs data.

```objective-c
(void)queryPedometerDataFromDate:(NSDate *)start
						  toDate:(NSDate *)end
					 withHandler:(CMPedometerHandler)handler;
```

Core Motion also allows apps to observe steps as the user is walking down the street. If the user moves a few steps, apps will be notified of the update and can update the UI accordingly.

```objective-c
(void)startPedometerUpdatesFromDate:(NSDate *)start
                        withHandler:(CMPedometerHandler)handler;
```

There also is a complementary method developers should call to signify when they wish to stop receiving updates.

```objective-c
(void)stopPedometerUpdates;
```

HealthKit provides parallel methods that do nearly the same thing as Core Motion, plus a few extra features. With HealthKit, developers can create a statistics query where they provide a time range, but they also must include one or more health data types. For these examples, we’ll be sticking with steps, but developers have the option to provide any of the 60-plus health data types referenced above. You can also specify the source of a HealthKit query if you want to specifically retrieve data from specific hardware or applications, like the M7 or M8, a Jawbone Up, and more. More information on a HKStatisticsQuery can be found in [Apple’s developer library](https://developer.apple.com/Library/ios/documentation/HealthKit/Reference/HKStatisticsQuery_Class/index.html).  

```objective-c
`(instancetype)initWithQuantityType:(HKQuantityType *)quantityType
            quantitySamplePredicate:(NSPredicate *)quantitySamplePredicate
                            options:(HKStatisticsOptions)options
                         anchorDate:(NSDate *)anchorDate
                 intervalComponents:(NSDateComponents *)intervalComponents;
```

HealthKit provides an observer query, which is similar to Core Motion’s method of counting steps as the user is moving while actively using your application. HealthKit also features some advanced querying abilities that Core Motion doesn’t include. One is a Collection Query—rather than providing one statistic for a given time range, collection queries allow for interval components which specify a segment of time to split results. For example, if a developer creates a Collection Query for the past 24 hours in intervals of 30 minutes, they’ll receive a collection object with 48 data points, each containing the step counts within each 30-minute interval of the day. This is very useful to show users when they are most active during the day. Core Motion doesn’t natively include this functionality, but it can be implemented by making multiple calls to the Pedometer with incremental time ranges.

HealthKit also offers a variety of other queries we won’t be covering here—including background observations, source, and correlation queries. For more information on everything HealthKit has to offer, check out [Apple’s documentation here](https://developer.apple.com/Library/ios/documentation/HealthKit/Reference/HealthKit_Framework/index.html#//apple_ref/doc/uid/TP40014707). 

## Comparison

#### iPhone 5s<sub>a</sub> steps[^2]

| Query   | Core Motion | HealthKit | Steps   |
| ------- | ----------- | --------- | ------- |
| 1 hour  | 0.001479    | 0.12345   | 636     |
| 1 day   | 0.001495    | 0.15778   | 12,108  |
| 7 days  | 0.001432    | 0.284386  | 55,672  |
| 14 days |             | 0.480623  | 117,631 |
| 30 days |             | 0.764683  | 231,245 |

#### iPhone 5s<sub>a</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.033564 | 2.502082 | 24 |
| Each half hour for past day | 0.059479 | 4.648873 | 48 |
| Each hour for past week | 0.38212 | 17.774078 | 168 |
| Each hour for past two weeks |  | 38.137488 | 336 |
| Each hour for past three weeks |  | 58.742764 | 504 |

We’ve already discussed the feature limitations of each framework, and now let’s get to comparing the optimization.  For these tests we are going to assume our example application is only referencing steps data. We know both HealthKit and Core Motion have the ability to report this data. We tested Core Motion and HealthKit performance on six different devices, including iPhone 5s, iPhone 6, and iPhone 6 Plus. Some of the devices tested have been used regularly since the debut of iOS 8, while some were either recently purchased or have not moved around enough to record many steps.  

#### iPhone 5s<sub>b</sub> steps[^2]

| Query | Core Motion | HealthKit | Steps |
| ---- | ---- | ---- | ---- |
| 1 hour | 0.001468 | 0.573899 | 394 |
| 1 day | 0.001511 | 0.32365 | 6,524 |
| 7 days | 0.001468 | 0.46644 | 50,579 |
| 14 days |  | 0.595634 | 142,107 |
| 30 days |  | 0.96693 | 258,878 |

#### iPhone 5s<sub>b</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.032579 | 3.077825 | 24 |
| Each half hour for past day | 0.050431 | 5.742032 | 48 |
| Each hour for past week | 0.165465 | 20.303977 | 168 |
| Each hour for past two weeks |  | 41.773169 | 336 |
| Each hour for past three weeks |  | 66.604945 | 504 |

Right off the bat, experiments showed Apple’s Health app struggling to provide step information on its own reported data when users tap “Show All Data.” While this feature worked great at the release of iOS 8, it seems to be getting bogged down weeks later by the immense amount of data its aggregates every day from the motion coprocessors. After some occasional delays, the Health app displays data in quantities of around 8 or so steps. For users who walk an average of 10,000 steps per day, their phones would add 1,250 records daily.  Apple’s Health and HealthKit database is going to eventually become enormous and unwieldy. This could provide a disappointing experience, and calls into question how Apple intends to address this performance bottleneck in the long term.

#### iPhone 6<sub>a</sub> steps[^2]

| Query | Core Motion | HealthKit | Steps |
| ---- | ---- | ---- | ---- |
| 1 hour | 0.001192 | 0.013739 | 444 |
| 1 day | 0.001197 | 0.19086 | 3,099 |
| 7 days | 0.001205 | 0.057164 | 23,862 |
| 14 days |  | 0.068357 | 28,853 |
| 30 days |  | 0.06858 | 28,853 |

#### iPhone 6<sub>a</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.024825 | 0.197022 | 24 |
| Each half hour for past day | 0.049744 | 0.427403 | 48 |
| Each hour for past week | 0.133259 | 1.467782 | 168 |
| Each hour for past two weeks |  | 1.918581 | 336 |
| Each hour for past three weeks |  | 1.944056 | 504 |

### App reporting steps from time A to time B

For our first test, we wanted to grab the step counts of various periods of time ranging from one hour to one month. Core Motion can’t be compared on time periods longer than a month since that data is only reliably stored for a week in the M7 or M8 coprocessors. With Core Motion, we found the results turned out to be linear. Adjusting the time range didn’t impact the amount of time the query took to complete. (Each test was run 100 times each per device, and the results were averaged.) While each device varied, all queries within the same device returned at about the same rate.

#### iPhone 6<sub>b</sub> steps[^2]

| Query | Core Motion | HealthKit | Steps |
| ---- | ---- | ---- | ---- |
| 1 hour | 0.006365 | 0.041661 | 0 |
| 1 day | 0.001179 | 0.014488 | 0 |
| 7 days | 0.013851 | 0.013851 | 4,194 |
| 14 days |  | 0.027277 | 14,179 |
| 30 days |  | 0.036817 | 22,340 |

#### iPhone 6<sub>b</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.039667 | 0.019241 | 24 |
| Each half hour for past day | 0.043968 | 0.024438 | 48 |
| Each hour for past week | 0.136271 | 0.293952 | 168 |
| Each hour for past two weeks |  | 1.06174 | 336 |
| Each hour for past three weeks |  | 1.512367 | 504 |

With HealthKit, we used a statistics query to gather steps data. We also had the additional ability to query for data older than a week, since HealthKit conveniently stores this for apps and users. The further back we went, the longer it took to fetch data—unlike Core Motion. In addition, we noted that the more steps the device had recorded, the longer the query took to return. Core Motion has a clear advantage in fetching data in this instance, provided your query takes place within the past week. Otherwise, developers have no choice but to use HealthKit.

#### iPhone 6 Plus<sub>a</sub> steps[^2]

| Query | Core Motion | HealthKit | Steps |
| ---- | ---- | ---- | ---- |
| 1 hour | 0.00412 | 0.284788 | 813 |
| 1 day | 0.004061 | 0.288742 | 4,284 |
| 7 days | 0.004082 | 0.482065 | 27,699 |
| 14 days |  | 0.74191 | 61,231 |
| 30 days |  | 1.162 | 129,302 |

#### iPhone 6 Plus<sub>b</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.07741 | 3.030514 | 24 |
| Each half hour for past day | 0.141804 | 5.345721 | 48 |
| Each hour for past week | 0.408495 | 21.660802 | 168 |
| Each hour for past two weeks |  | 31.977657 | 336 |
| Each hour for past three weeks |  | 70.993917 | 504 |

### App reporting steps from time A to time B, broken into quantities of C time intervals

Next, we experimented by asking the frameworks to retrieve step amounts between a range, while also breaking them down into interval amounts. This would allow a developer to create an application to track step counts every 30 minutes for the previous day. Core Motion doesn’t include methods for this out of the box, but developers can create their own logic to break up a time period into segments and query the motion coprocessor for this range. In the example referenced above, we queried Core Motion 48 times to retrieve every 30-minute interval in a 24 hour period. With these queries, we started to notice a slowdown, but the results still return quickly enough for the user interface to respond smoothly.

#### iPhone 6 Plus<sub>b</sub> steps[^2]

| Query | Core Motion | HealthKit | Steps |
| ---- | ---- | ---- | ---- |
| 1 hour | 0.001239 | 0.024614 | 134 |
| 1 day | 0.001268 | 0.026442 | 1,511 |
| 7 days | 0.00125 | 0.043663 | 19,111 |
| 14 days |  | 0.05139 | 26,256 |
| 30 days |  | 0.081151 | 47,603 |

#### iPhone 6 Plus<sub>b</sub> intervals[^2]

| Query | Core Motion | HealthKit | Intervals |
| ---- | ---- | ---- | ---- |
| Each hour for past day | 0.032863 | 0.184344 | 24 |
| Each half hour for past day | 0.045486 | 0.338826 | 48 |
| Each hour for past week | 0.13381 | 1.335923 | 168 |
| Each hour for past two weeks |  | 2.698321 | 336 |
| Each hour for past three weeks |  | 4.199490 | 504 |

HealthKit has built-in support to make this type of query with `HKStatisticsCollectionQueries`. This is where we started to notice a more dramatic delay in the results returned. This kind of behavior cannot be avoided, so developers need to be careful when refining their queries and updating the interface. Some of our advanced HealthKit queries took over a minute on certain devices—the user experience would be severely degraded by a blocked user interface for this length of time.

One interesting piece of information we found is that the less time a device has been using iOS 8 and storing health data, the quicker HealthKit responds. This matches up with the slowdown of Apple’s Health app mentioned earlier. The iPhone 6<sub>b</sub> was a new device that had only been in use for two weeks. The iPhone 6 Plus<sub>a</sub> and iPhone 6<sub>b</sub> were devices that have not been used often. In contrast, both iPhones 5s and the iPhone 6<sub>a</sub> were used nearly every day since the release of iOS 8, and the slowdown in fetching data became drastic.

## Conclusion

HealthKit is a powerful framework, but may not always be the best choice in all scenarios. When tracking anything aside from steps, distance, or stairs, developers will need to use HealthKit. For measuring any of those three items from the M7 or M8 coprocessor, Core Motion is the optimal route—unless developers want to specifically use another data source, connect to a wearable device, or access data older than seven days. The processor will always be lightning quick compared to accessing the Health datastore. The performance of more complicated HealthKit queries can drastically change the performance of an application. This is critical for developers, who would never want this performance to effect the user experience. Steps is a unique health data type—it’s unlikely that anything else in HealthKit will come close to storing the same number of records. By understanding the performance differences and implications of HealthKit and Core Motion, developers can optimize their apps for the best and worst case scenarios to create the greatest experience for everyone.

> This post was written in partnership with [Sean Samocki](http://www.runningincode.com) and originally published on [punchkick.com](https://www.punchkick.com/blog/2014/11/17/using-healthkit-core-motion-optimize-ios-step-counters).

[^1]: Unfortunately, the Health app and HealthKit API are not available on iPads quite yet. For this reason, there is no supported functionality to sync data across devices.
[^2]: Query durations shown in seconds.