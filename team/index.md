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

## Post-Doc

{% include section.html %}

## PHD
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

{% include section.html %}

## MS

{% include section.html %}

## Undergraduated



{% include section.html background="images/background.jpg" dark=true %}

## Alumni

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
