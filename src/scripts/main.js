import $ from './libs/jquery.min';
import Header from './modules/header';
import Home from './modules/home';
import Products from './modules/products';
import Contacts from './modules/contacts';

$(document).ready(() => {
    const header = document.querySelector('.header');
    const home = document.querySelector('.home');
    const products = document.querySelector('.products');
    const contacts = document.querySelector('.contacts');

    const headerInstance = new Header(header);
    const homeInstance = new Home(home);
    const productsInstance = new Products(products);
    const contactsInstance = new Contacts(contacts)
});
