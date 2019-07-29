---
title: Potatography
date: 2019-01-01
type: website
modal-id: 20190101
link: https://zemmyang.github.io/potatography/
img: potatography.png
description: A mildly curated photography portfolio, mostly of cats and scenery.
category: projects
layout: default
client: none
topic: websites, photography, GIMP, photo editing
---

* Github-pages powered photography portfolio.
* For privacy, image metadata are removed using a very simple bash script:
~~~~
cd gallery
exiftool -all= *
rm *original
~~~~
