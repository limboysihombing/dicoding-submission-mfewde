const DrawerInitiator = {
  init({ navbar, content }) {
    this._navbar = navbar;
    this._navbarBrand = navbar.getElementsByClassName('navbar-brand');
    this._button = navbar.querySelector('#hamburgerButton');
    this._drawer = navbar.querySelector('#navigationDrawer');

    window.onscroll = () => {
      if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        navbar.classList.add('bg-white');
        this._navbarBrand[0].children[0].classList.remove('text-white');
        this._button.classList.add('text-dark');
      } else if (!this._drawer.classList.contains('expand')) {
        navbar.classList.remove('bg-white');
        this._navbarBrand[0].children[0].classList.remove('text-dark');
        this._navbarBrand[0].children[0].classList.add('text-white');
        this._button.classList.remove('text-dark');
      }
    };

    this._button.addEventListener('click', (event) => {
      this._toggleDrawer(event, this._drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, this._drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('expand');
    if (drawer.classList.contains('expand')) {
      this._navbarBrand[0].children[0].classList.add('text-dark');
      this._navbar.classList.add('bg-white');
      this._button.classList.add('text-dark');
    } else if (!(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)) {
      this._navbar.classList.remove('bg-white');
      this._navbarBrand[0].children[0].classList.remove('text-dark');
      this._button.classList.remove('text-dark');
      this._navbarBrand[0].children[0].classList.add('text-white');
    }
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('expand');
    if (drawer.classList.contains('expand')) {
      this._navbarBrand[0].children[0].classList.add('text-dark');
      this._navbar.classList.add('bg-white');
      this._button.classList.add('text-dark');
    } else if (!(document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)) {
      this._navbar.classList.remove('bg-white');
      this._navbarBrand[0].children[0].classList.remove('text-dark');
      this._button.classList.remove('text-dark');
      this._navbarBrand[0].children[0].classList.add('text-white');
    }
  },
};

export default DrawerInitiator;
