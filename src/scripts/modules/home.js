const selectors = {
    badge: '.home__badge',
}

class Home {
    constructor(container) {
        this.container = container;
        this.badges = this.container.querySelectorAll('.home__badge');
        
        this.initEvents();
    }

    badgeAppearance() {
        let index = 1;
        this.badges.forEach(element => {
            const t = setInterval(function(){
                element.classList.add('home__badge--fade');
            }, 1000 * index);
            index += 1;
        });
    }

    initEvents() {
        this.badgeAppearance();
    }
}

export default Home;