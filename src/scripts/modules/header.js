const selectors = {
    menuToggleOn: '.navbar__menu-toggle--on',
    menuToggleOff: '.menu__toggle--off',
    menu: '.menu',
}

class Header{
    constructor (container) {
        this.container = container;
        this.menuToggleOn = this.container.querySelector(selectors.menuToggleOn);
        this.menuToggleOff = this.container.querySelector(selectors.menuToggleOff);
        this.menu = this.container.querySelector(selectors.menu);
        
        this.initEvents();
    }

    menuToggle() {
        this.menuToggleOn.addEventListener('click', () => {
            this.menu.style.top = '0';
            console.log(this.menu.offsetHeight);
        })
        this.menuToggleOff.addEventListener('click', () => {
            this.menu.style.top = `-${this.menu.offsetHeight}px`;
        })
    }

    initEvents() {
        this.menuToggle();
    }
}

export default Header;