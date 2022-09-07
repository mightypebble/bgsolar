import Swiper, { Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

const selectors = {
    swiper: '.products__swiper',
    swiperNext: '.swiper-button-next',
    swiperPrev: '.swiper-button-prev'
}

class Products {
    constructor(container) {
        this.container = container;

        this.initEvents();
    }

    initSwiper() {
        const productSwiper = new Swiper(selectors.swiper, {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
                nextEl: this.container.querySelector(selectors.swiperNext),
                prevEl: this.container.querySelector(selectors.swiperPrev)
            },
        });
    }

    initEvents() {
        this.initSwiper();
    }
}

export default Products;