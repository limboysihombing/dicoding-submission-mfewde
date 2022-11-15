import DicodingSource from '../../data/dicoding-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate, createLoadingWithBgTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant_detail">
      </div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const restaurantDetail = document.querySelector('#restaurant_detail');
    restaurantDetail.innerHTML += createLoadingWithBgTemplate();
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurant = await DicodingSource.restaurantDetail(url.id);

      restaurantDetail.innerHTML = '';
      restaurantDetail.innerHTML += createRestaurantDetailTemplate(restaurant);
      this.renderCategory(restaurant.categories);
      this.renderMenusList(restaurant.menus);
      this.renderCustomerReviews(restaurant.customerReviews);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
      });
    } catch (err) {
      restaurantDetail.innerHTML = '<div class="error-connection">Failed to fetch data. Check your connection. :(</div>';
    }
  },
  renderCategory(category) {
    const restaurantCategory = document.querySelector('#res_category');
    category.forEach((c, i) => {
      if (i !== category.length - 1) {
        restaurantCategory.innerHTML += `${c.name}, `;
      } else {
        restaurantCategory.innerHTML += `${c.name}`;
      }
    });
  },
  renderMenusList(menus) {
    const foodsSection = document.querySelector('#food_list');
    const drinksSection = document.querySelector('#drink_list');
    menus.foods.forEach((food) => {
      foodsSection.innerHTML += `<li>${food.name}</li>`;
    });
    menus.drinks.forEach((drink) => {
      drinksSection.innerHTML += `<li>${drink.name}</li>`;
    });
  },
  renderCustomerReviews(reviews) {
    const reviewsSection = document.querySelector('#reviews');
    reviews.forEach((review) => {
      reviewsSection.innerHTML += `
        <li class="mt-2">
          <h4>
            ${review.name} - <span><small>${review.date}</small></span>
          </h4>
          <p class="">${review.review}
          </p>
        </li>
      `;
    });
  },
};
export default Detail;
