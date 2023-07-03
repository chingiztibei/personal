---
title: "Путь назначения: Стамбул"
description: "Стамбул подорожал. Принимаешь как данность оплачивая за рыбу в три раза больше, чем привык."
featured_image: https://images.unsplash.com/photo-1683346861260-a80c3f00984f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2666&q=80
author: "Чингиз Тибэй"
url: /travel/istanbul
date: "2023-06-30"
lastmod: "2023-06-30"
tags: 
- Travel
---

<div class="auto">

Стамбул подорожал. 

Принимаешь как данность оплачивая за&nbsp;свою рыбу в&nbsp;три раза больше, чем привык. С&nbsp;таким ценником уже можно подбирать и&nbsp;другие страны для обитания.

<div class="masonry-container">
</div>

Толпы блуждают туда-сюда, из&nbsp;района в&nbsp;район. Сбегаем в&nbsp;более отдаленные. Заново знакомимся, теперь уже в&nbsp;широком смысле. Заново отвыкаем мысленно переводить валюты.

#### ***

Каждая составляющая Стамбула своеобразная. Если в&nbsp;прошлый раз нам инстинктивно недоставало Европы, то&nbsp;в&nbsp;этот мы&nbsp;осознанно остались в&nbsp;Азии. В&nbsp;этот раз она нам более по&nbsp;душе.

#### ***

Карта с&nbsp;локациями по&nbsp;ссылке: https://goo.gl/maps/dFwF1PAqkM1htHFU6

</div>

<script>
const accessKey = 'EMa6WdAQslS1R18qLqFmAqwJovIg5m5nS_-ZcjPQ63M';
const collectionID = 'NfeMXnZnCCM';
const perPage = 30; // Set the number of photos to retrieve per page
let currentPage = 1;
let totalPages = 1;

const grid = document.querySelector('.masonry-container');

function fetchPhotos() {
  fetch(`https://api.unsplash.com/collections/${collectionID}/photos/?client_id=${accessKey}&per_page=${perPage}&page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      // Append the photos to the grid
      data.forEach(photo => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('masonry-item');

        const link = document.createElement('a');
        link.href = photo.links.html;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        const img = document.createElement('img');
        img.src = photo.urls.regular;
        img.alt = photo.alt_description;

        link.appendChild(img);
        gridItem.appendChild(link);
        grid.appendChild(gridItem);
      });

      // Update pagination variables
      totalPages = Math.ceil(data.total / perPage);
      currentPage++;

      // Fetch the next page of photos if there are more pages
      if (currentPage <= totalPages) {
        fetchPhotos();
      }
    })
    .catch(error => console.log(error));
}

fetchPhotos();

</script>
