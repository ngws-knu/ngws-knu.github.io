---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

{% assign roles = "pi,postdoc,phd,ms,undergrad" | split: "," %}
{% assign role_titles = "Professor,Post-Doc,PHD,MS,Undergraduated" | split: "," %}

{% for role in roles %}
  {% assign members_with_role = site.members | where: "role", role %}
  {% if members_with_role.size > 0 %}
    ## {{ role_titles[forloop.index0] }}
    {% include list.html data="members_with_role" component="portrait" %}
    {% include section.html %}
  {% endif %}
{% endfor %}


{% include section.html background="images/background.jpg" dark=true %}

## Alumni

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
