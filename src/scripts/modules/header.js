const selectors = {
    menuToggleButton: '.navbar__menu-toggle',
    menu: '.menu',
}

class Header{
    constructor (container) {
        this.container = container;
        this.menuToggleButton = this.container.querySelector(selectors.menuToggleButton);
        this.menu = this.container.querySelector(selectors.menu);
        
        this.initEvents();
    }

    menuToggle() {
        this.menuToggleButton.addEventListener('click', () => {
            if (this.menu.style.left !== '0px') {
                this.menu.style.left = '0';
            } else {
                this.menu.style.left = '100%';
            }
        })
    }

    initEvents() {
        this.menuToggle();
    }
}

export default Header;