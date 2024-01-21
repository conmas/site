---
layout: page
title: Home
id: home
permalink: /
---

# Hi, I’m Connor.

I’m a product leader in Chicago with a background in design and mobile. Today, I work at McDonald’s on industry-leading software used by millions of customers every day.

More [about me](/about). See what I’m up to [now](/now).

## Recently updated notes

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>
