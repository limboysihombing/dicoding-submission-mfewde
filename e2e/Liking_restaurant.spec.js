const assert = require('assert');

Feature('Liking restaurant');
const favoriteEmpty = 'Belum ada data.'
Before((I) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#restaurant_list');
  I.see(favoriteEmpty, '#restaurant_list');
});

Scenario('liking one restaurant', async (I) => {
  // Scenario
  // 1. Pastikan belum ada restaurant yang disukai
  // 2. Buka halaman utama
  // 3. Pilih salah satu restaurant
  // 4. Click restaurant
  // 5. Buka halaman Favorite
  // 6. Pastikan ada item restaurant favorit
  I.see(favoriteEmpty, '#restaurant_list');
  I.amOnPage('/');
  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRsestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-title a');
  assert.strictEqual(firstRsestaurantTitle, favoriteRestaurantTitle);
})

Scenario('Unliking one restaurant', async (I) => {
  // Scenario
  // 1. Pastikan belum ada restaurant yang disukai
  // 2. Buka halaman utama
  // 3. Pilih salah satu restaurant
  // 4. Click restaurant
  // 5. Buka halaman Favorite
  // 6. Pastikan ada item restaurant favorit
  // 7. Click item restaurant fovorit
  // 8. pastikan ada tombol #likeButton
  // 9. Click tombol #likeButton untuk menghapus item favorite
  // 10. Buka halaman Favorite
  // 11. pastikan tidak ada item favorite dengan dengan cara membandingkan string message 'Belum ada data.'
  I.see(favoriteEmpty, '#restaurant_list');

  I.amOnPage('/');
  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRsestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-title a');
  assert.strictEqual(firstRsestaurantTitle, favoriteRestaurantTitle);

  I.click(firstRestaurant)

  // unlike restaurant
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant_list');
  const noFavoriteRestaurantMessage = await I.grabTextFrom('#restaurant_list p');

  assert.strictEqual(favoriteEmpty, noFavoriteRestaurantMessage)
})