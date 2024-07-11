---
title: Projects
nav:
  order: 2
  tooltip: Our projects
---

# {% include icon.html icon="fa-solid fa-wrench" %}Projects



{% include section.html %}

## Featured

{% assign featured_projects = site.data.projects | where: "group", "featured" %}

{% if featured_projects.size > 0 %}
  {% include list.html component="card" data="projects" filters="group: featured" %}
{% else %}
  <p>No data exist.</p>
{% endif %}


{% include section.html %}

## More

{% if site.data.projects %}
  {% include list.html component="card" data="projects" filters="group: " style="small" %}
{% else %}
  <p>No data exist.</p>
{% endif %}