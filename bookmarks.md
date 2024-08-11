---
layout: page
title: Bookmarks
description: Useful online tools and resources
---

Online resources that I've found interesting while studying.

{% for category in site.data.bookmarks %}
{% assign items = category[1] | sort_natural: "name" %}
### {{ category[0] | capitalize }}

{% for item in items %}
* **[{{ item.name }}]({{ item.link }}){:target="_blank"}**
  * *{{ item.description }}*
  * **My thoughts**: {{ item.recommendation }}  
  * **Tags**: {% for tag in item.tags %}{{ tag }}{% if forloop.last == false %}, {% endif %}{% endfor %}
{% endfor %}
{% endfor %}

----

{% if site.comments_repo %}
{% include comments.html %}
{% endif %}
