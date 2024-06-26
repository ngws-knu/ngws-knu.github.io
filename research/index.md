---
title: Research
nav:
  order: 1
  tooltip: Major research
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

<div style="text-align: left;">
The Next Generation Web Security Laboratory identifies various security threats emerging in the rapidly evolving digital environment and seeks innovative solutions to prevent them. Our work not only addresses current web security challenges but also anticipates future vulnerabilities, ensuring a secure web ecosystem for all users.

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
  {% 
  include feature.html 
  image=subject.image 
  text=subject.content 
  flip=false
  %}

  {% include section.html %}
{% endfor %}

## More things
if you want more things about subjects, you can see our projects or publications.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
%}

{%
  include button.html
  link="publications"
  text="Browse our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
%}




