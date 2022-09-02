const selectors = {
    fade_element: '.home__fade-element',
    fade_in: 'home__element--fade-in',
}

class Home {
    constructor(container) {
        this.container = container;
        this.fadeElements = this.container.querySelectorAll(selectors.fade_element);
        
        this.initEvents();
    }

    badgeAppearance() {
        let index = 1;
        this.fadeElements.forEach(element => {
            const t = setInterval(function(){
                element.classList.add(selectors.fade_in);
            }, 1000 * index);
            index += 1;
        });
    }

    initEvents() {
        this.badgeAppearance();
    }
}

export default Home;