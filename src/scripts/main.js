import $ from './libs/jquery.min';
import Header from './modules/header';
import Home from './modules/home';

$(document).ready(() => {
    const header = document.querySelector('.header');
    const home = document.querySelector('.home');

    const headerInstance = new Header(header);
    const homeInstance = new Home(home);
});
