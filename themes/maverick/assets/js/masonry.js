const accessKey = 'EMa6WdAQslS1R18qLqFmAqwJovIg5m5nS_-ZcjPQ63M';
const collectionID = '{{ $collectionID }}';

const grid = document.querySelector('.masonry-container');

fetch(`https://api.unsplash.com/collections/${collectionID}/photos/?client_id=${accessKey}&per_page=30`)
    .then(response => response.json())
    .then(data => {
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
    })
    .catch(error => console.log(error));
