const BtnHome = document.getElementById('btnHome');
const BtnContacto = document.getElementById('btnContacto');
const BtnAbout = document.getElementById('btnAbout');

class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }
  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split('/');
    const path = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : '';
    this.loadRoute(path); //Guarda la ruta actual
  }
  loadRoute(...path) {
    const matchedRoute = this._matchUrlToRoute(path);

    const url = `/${path.join('/')}`;
    history.pushState({}, 'this works', url);
    
    const routerOutElem = document.querySelectorAll('[data-router')[0];
    routerOutElem.innerHTML = matchedRoute.template;
  }
  _matchUrlToRoute(path) {
    const matchRoute = this.routes.find(route => (path === '/' ? '/' : `/${path}`) === route.path);
    return matchRoute;
  }
}

const routes = [
  {
    path: '/',
    template: '<h1>Home</h1>'
  },
  {
    path: '/contacto',
    template: '<h1>Contacto</h1>'
  },
  {
    path: '/about',
    template: '<h1>Acerca de</h1>'
  }
];

const router = new Router(routes);

BtnHome.addEventListener('click', () => router.loadRoute(''));
BtnContacto.addEventListener('click', () => router.loadRoute('contacto'));
BtnAbout.addEventListener('click', () => router.loadRoute('about'));

