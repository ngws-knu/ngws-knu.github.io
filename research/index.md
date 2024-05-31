---
title: Research
nav:
  order: 1
  tooltip: Published works
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

<div>
The Next Generation Web Security Laboratory identifies various security threats emerging in the rapidly evolving digital environment and seeks innovative solutions to prevent them.

</div>

<span>
Our research focuses on:
</span>

<ul>
  {% for subject in site.data.subjects %}
    <li>{{ subject.title }}</li>
  {% endfor %}
</ul>


{% include section.html %}

{% for subject in site.data.subjects %}
  <h2>{{ subject.title }}</h2>
  {% include subject.html title=subject.title image=subject.image content=subject.content %}
  {% include section.html %}
{% endfor %}

## More things
if you want more things about subjects, you can see publications.{%
  include button.html
  link="projects"
  text="Browse our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}




