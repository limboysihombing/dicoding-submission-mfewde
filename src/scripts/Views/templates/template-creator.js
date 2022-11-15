import CONFIG from '../../globals/config';

const createHeroTemplate = () => `
  <div class="container">
      <h1 class="text-white display-1" id="hero_title">Selamat Datang</h1>
      <p class="text-white">Temukan restoran terbaik yang tersebar di seluruh Indonesia melalui situs <span
          class="text-primary">Cita Rasa</span></p>
    </div>
  </div>
`;

const createRestaurantListTemplate = (res) => `

  <article id="6c7bqjgi84kcowlqdz" class="restaurant-item">
    <img class="restaurant-thumbnail lazyload"
        data-src="${CONFIG.BASE_IMAGE_URL}medium/${res.pictureId}"
        alt="${res.name}">
    <div class="restaurant-content">
        <h1 class="restaurant-title text-dark"><a href="#/detail/${res.id}">${res.name}</a></h1>
        <span class="restaurant-rating">Rating: <span class="text-primary">${res.rating}</span></span>
        <p class="restaurant-description">${res.description.slice(0, 100)} ...</p>
        <span class="restaurant-location text-dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg> 
        ${res.city}</span>
    </div>
  </article>
`;

const createSearchRestaurantTemplate = () => `<div class="search-title">
        <h2>Cari Restoran</h2>
      </div>
      <form id="search-form" action="">
        <input placeholder="Ketik nama restoran.." type="text" name="" id="search_input">
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-search" viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          Cari
        </button>
      </form>
      `;

const createRestaurantDetailTemplate = (res) => `
  <div id="restaurant_detail" class="mt-4">
      <div class="container-fluid">
        <div class=" container">
          <div class="row-2">

            <div class="restaurant-img">

            <picture>
                <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL}small/${res.pictureId}">
                <img width="80%" height="100%" src="${CONFIG.BASE_IMAGE_URL}medium/${res.pictureId}" alt="restaurant image" />
            
            </picture>
              

            </div>

            <div class="restaurant-profile mt-2">
              <p class="small" id="res_category"></p>
              <h1 class="text-gray">${res.name}</h1>
              <p class="mt-">${res.address}, ${res.city}</p >
              <p class="mt-1">${res.description}</p>
              <span class="rating">Rating : ${res.rating}</span>
            </div >
          </div >
        </div >

      </div >
  <div class="container mt-2">
    <div class="card-list-menus mt-2">
      <div class="foods">
        <h3>Daftar Makanan</h3>
        <ul class="mt-1" id="food_list"></ul>
      </div>

      <div class="drinks">
        <h3>Daftar Minuman</h3>
        <ul class="mt-1" id="drink_list"></ul>
      </div>
    </div>
  </div>
  <div class="container">
    <h3>Customer Reviews</h3>
    <ul class="reviews mb-2" id="reviews"></ul>
  </div>
    </div >
  `;

const createLoadingWithBgTemplate = () => `
  <div class="loading-template">
    <h1>Loading ...</h1>  
  </div>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createHeroTemplate,
  createRestaurantDetailTemplate,
  createLoadingWithBgTemplate,
  createUnlikeRestaurantButtonTemplate,
  createLikeRestaurantButtonTemplate,
};
