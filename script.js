const accessKey = "i0DhD2CDUwrgTt4WbAX7ZH-paJn-UJkT42v2b4uA6Fw";

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const searchMoreBtn = document.getElementById('searchMore');

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = 'https://api.unsplash.com/search/photos?query=' + keyword + '&page=' + page + '&per_page=12&client_id=' + accessKey;


  const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
      searchResult.innerHTML = "";
    }
    
    const result = data.results;
    result.forEach((photo) => {
      const img = document.createElement('img');
      img.src = photo.urls.small;
      const imgContainer = document.createElement('a');
      imgContainer.href = photo.links.html;
      imgContainer.target = '_blank';

      imgContainer.appendChild(img);
      searchResult.appendChild(imgContainer);
      
        });
       showMore.style.display = "block";
  }

searchForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", ()=> {
  page++;
  searchImages();
});