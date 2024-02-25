---
layout: page
title: Blog
id: blog
permalink: /blog
---
# Blog

I’ve written extensively over the years for various blogs and websites, some my own, and some professionally. I’m in the process of migrating old blog posts, articles, and ebooks from Medium and other sites into this new home. This library is incomplete, but growing. Some links and assets aren’t working yet, but I’m working on restoring them.

<ul>
  {% assign recent_posts = site.posts | sort: "last_modified_at_timestamp" %}
  {% for post in recent_posts %}
	<li>
	  <span style="color:hsl(0, 0%, 50%);font-size:.8rem;padding-right:.25em;">{{ post.date | date: "%Y • %m" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> 
	</li>
  {% endfor %}
</ul>