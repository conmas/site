---
layout: page
title: Home
id: home
permalink: /
---

# Hi, I’m Connor.

I’m a product and engineering leader in Chicago with a background in design, product, and mobile. Today, I work on digital products & platforms at McDonald’s, leading the global engineering team that builds industry-leading [mobile apps](https://apple.co/3Hll1QM), websites, and kiosks used by millions of customers every day.

I want to make [wonderful](https://bit.ly/3HiCadM) products. Shipping useful tools or thoughtful designs is like writing love letters to a billion strangers. This keeps product work fun, but also reminds me to obsess over the details.

I’m passionate about accessibility, data privacy, and em dashes. I rarely use social media, but when I do, I post about Apple, productivity apps, and smart home platforms. Otherwise, you’ll typically find me drinking coffee and talking with my hands. 

## Recently updated notes

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 32em;
  }
</style>
