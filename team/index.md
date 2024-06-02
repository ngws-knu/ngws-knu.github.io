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

{% include section.html %}

{% comment %}

 ## Post-Doc

{% include list.html data="members" component="portrait" filters="role: postdoc" %}

{% include section.html %} 

{% endcomment %}

{% comment %} 

## Ph.D
{% include list.html data="members" component="portrait" filters="role: phd" %}

{% include section.html %} 

{% endcomment %}

## MS

{% include list.html data="members" component="portrait" filters="role: ms" %}

{% include section.html %}

## Undergraduated

{% include list.html data="members" component="portrait" filters="role: undergrad" %}

{% include section.html %}


{% include section.html background="images/background.jpg" dark=true %}

## Alumni

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
