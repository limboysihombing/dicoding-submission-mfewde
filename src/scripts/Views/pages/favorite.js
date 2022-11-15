import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="hero">
      <div class="container">
        <h1 class="text-white display-1" id="hero_title">Selamat Datang</h1>
        <p class="text-white">Temukan restoran terbaik yang tersebar di seluruh Indonesia melalui situs <span
                class="text-primary">Cita Rasa</span></p>
      </div>
    </div>
    <div class="container">
    <div class="list-label">
      <h2 class="text-dark">Daftar Restaurant Tersimpan</h2>
    </div>
    <div id="restaurant_list" class="row list-item">
    </div>
  </div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant_list');
    if (restaurants.length < 1) { restaurantContainer.innerHTML += '<p>Belum ada data.</p>'; }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
