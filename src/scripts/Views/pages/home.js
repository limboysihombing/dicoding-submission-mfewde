import DicodingSource from '../../data/dicoding-source';
import { createRestaurantListTemplate, createLoadingWithBgTemplate } from '../templates/template-creator';

const Home = {
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
        <h2 class="text-dark">Daftar Restaurant</h2>
      </div>
      <div id="restaurant_list" class="row list-item">
      </div>
    </div>
    `;
  },
  async afterRender() {
    const restaurantList = document.querySelector('#restaurant_list');
    restaurantList.innerHTML = createLoadingWithBgTemplate();
    try {
      const restaurants = await DicodingSource.restaurantList();
      restaurantList.innerHTML = '';
      restaurants.forEach((res) => {
        restaurantList.innerHTML += createRestaurantListTemplate(res);
      });
    } catch (err) {
      restaurantList.innerHTML = 'Failed to fetch data. Check your connection';
    }
  },
};

export default Home;
