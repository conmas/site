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

<ul>
  {% assign recent_posts = site.posts | sort: "last_modified_at_timestamp" | reverse %}
  {% for post in recent_posts limit: 10 %}
    <li>
      {{ post.last_modified_at | date: "%Y-%m-%d" }} <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
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
