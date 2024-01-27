---
layout: page
title: Home
id: home
permalink: /
---

# Hi, I’m Connor.

I’m a product leader in Chicago with a background in design and mobile. Today, I work at McDonald’s on industry-leading software used by millions of customers every day.

More <a href="/about">about me</a>. See what I’m up to <a href="/now">now</a>.

## Legacy blog posts

I’m in the process of migrating old blog posts from Medium and other sites into this new home. Check out some of the ones from 2014–2017 that have been carried over so far. (Some links and assets aren’t working yet, but I’m in the process of restoring them.)

<ul>
  {% assign recent_posts = site.posts | sort: "last_modified_at_timestamp" | reverse %}
  {% for post in recent_posts limit: 10 %}
    <li>
      {{ post.date | date: "%Y" }} • <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> 
    </li>
  {% endfor %}
</ul>

<!-- ## Recently updated notes

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul> -->
