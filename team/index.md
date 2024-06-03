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

{% include card.html image="images/photo.jpg" title="name" subtitle="graduated ##" description="where he got" style="small" %}

{% include card.html image="images/photo.jpg" title="name" subtitle="graduated ##" description="where he got" style="small" %}

{% include card.html image="images/photo.jpg" title="name" subtitle="graduated ##" description="where he got" style="small" %}

{% endcapture %}

{% include grid.html content=content %}
