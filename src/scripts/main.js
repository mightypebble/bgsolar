import $ from './libs/jquery.min';
import Header from './modules/header';
import Home from './modules/home';
import Products from './modules/products';

$(document).ready(() => {
    const header = document.querySelector('.header');
    const home = document.querySelector('.home');
    const products = document.querySelector('.products');

    const headerInstance = new Header(header);
    const homeInstance = new Home(home);
    const productsInstance = new Products(products);
});
