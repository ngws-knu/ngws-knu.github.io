---
title: Contact
nav:
  order: 5
  tooltip: TO contact us
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="jiyeon@knu.ac.kr"
  link="jiyeon@knu.ac.kr"
%}
{%
  include button.html
  type="phone"
  tooltip="number"
  text="053-950-6376"
  link="053-950-6376"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps/place/%EA%B2%BD%EB%B6%81%EB%8C%80%ED%95%99%EA%B5%90+%EA%B3%B5%EB%8C%809%ED%98%B8%EA%B4%80/data=!3m1!4b1!4m6!3m5!1s0x3565e177a0431685:0xb4a1e32cc39fa8be!8m2!3d35.8868928!4d128.6084967!16s%2Fg%2F11kj90509c?entry=ttu"
%}

{% comment %}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption=""
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption=""
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}

{% endcomment %}
