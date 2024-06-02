---
title: Team
nav:
  order: 4
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

{% include section.html %}

## Professor

{% include list.html data="members" component="portrait" filters="role: pi" %}

{% comment %}

 ## Post-Doc

{% include list.html data="members" component="portrait" filters="role: postdoc" %}

{% endcomment %}

{% comment %} 

## Ph.D
{% include list.html data="members" component="portrait" filters="role: phd" %}

{% endcomment %}

## MS

{% include list.html data="members" component="portrait" filters="role: ms" %}

## Undergraduated

{% include list.html data="members" component="portrait" filters="role: undergrad" %}


{% include section.html background="images/background.jpg" dark=true %}

## Alumni

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
