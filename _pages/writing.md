---
layout: page
title: Writing archive
permalink: /writing
original_site: "[[connormason.me]]"
---
# Writing

I’ve written extensively over the years for various blogs and websites, some my own, and some professionally. I’m in the process of migrating old blog posts, articles, and ebooks from Medium and other sites into this new home. This library is incomplete, but growing. Some links and assets aren’t working yet, so hang tight as I continue to restore them.

<ul>
  {% assign recent_posts = site.writing | sort: 'date' | reverse %}
  {% for post in recent_posts %}
	<li>
	  <span class="date-label">{{ post.date | date: "%Y • %m" }}</span> <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
	</li>
  {% endfor %}
</ul>