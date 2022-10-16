const selectors = {
    menuToggleOn: '.navbar__menu-toggle--on',
    menuToggleOff: '.menu__toggle--off',
    menu: '.menu',
    buttonTop: '.button-top',
}

class Header{
    constructor (container) {
        this.container = container;
        this.menuToggleOn = this.container.querySelector(selectors.menuToggleOn);
        this.menuToggleOff = this.container.querySelector(selectors.menuToggleOff);
        this.menu = this.container.querySelector(selectors.menu);
        this.buttonTop = this.container.querySelector(selectors.buttonTop);
        
        this.initEvents();
    }

    menuToggle() {
        this.menuToggleOn.addEventListener('click', () => {
            this.menu.style.top = '0';
        })
        this.menuToggleOff.addEventListener('click', () => {
            this.menu.style.top = `-${this.menu.offsetHeight}px`;
        })
    }

    toTop() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0 && window.innerWidth > 1024) {
                this.buttonTop.style.display = 'inline-block';
            } else {
                this.buttonTop.style.display = 'none';
            }
        });
    }

    initEvents() {
        this.menuToggle();
        this.toTop();
    }
}

export default Header;
