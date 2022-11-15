import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ navbar, content }) {
    this._navbar = navbar;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navbar: this._navbar,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
