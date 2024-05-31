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



{% include section.html %}



## All

{% include subject.html test1=site.data.subjects[0].test1 test3=site.data.subjects[0].test11%}

{% for test in site.data.subjects %}
  {% include subject.html test1=test.test1 test3=test.test11 %}
{% endfor %}



