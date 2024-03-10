---
layout: page
title: Connor Mason
id: home
permalink: /
---
# Hi, I’m Connor.

I’m a product leader in Chicago with a background in design and mobile. Today, I work at McDonald’s on industry-leading software used by millions of customers every day.

More [about me](/about). See what I’m up to [now](/now).

## Recently updated notes

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 10 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

## Writing archive <a href="/writing"><i class="fa-solid fa-ellipsis"></i></a>

I’ve written extensively over the years for various blogs and websites, some my own, and some professionally. I’m in the process of migrating old blog posts, articles, and ebooks from Medium and other sites into this new home. This library is incomplete, but growing. Some links and assets aren’t working yet, so hang tight as I continue to restore them.

<ul>
  {% assign recent_posts = site.posts | sort: "last_modified_at_timestamp" %}
  {% for post in recent_posts limit: 5 %}
    <li>
      <span style="color:hsl(0, 0%, 50%)">{{ post.date | date: "%Y" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> 
    </li>
  {% endfor %}
  <li>See <a href="/writing">full writing archive</a>.</li>
</ul>

