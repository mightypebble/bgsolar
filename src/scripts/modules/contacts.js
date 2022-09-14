const selectors = {
    form: '.contacts__form',
    form_show: '.contacts__form--show',
    form_close: '.contacts__form-item--close'
}

class Contacts{
    constructor(container) {
        this.container = container;
        this.form = this.container.querySelector(selectors.form);
        this.formShow = this.container.querySelector(selectors.form_show);
        this.formClose = this.container.querySelector(selectors.form_close);

        this.initEvents();
    }

    toggleForm() {
        this.formShow.addEventListener('click' , () => {
            this.form.style.right = '0';
        });
        this.formClose.addEventListener('click', () => {
            this.form.style.right = '100%'
        })
    }

    initEvents() {
        this.toggleForm();
    }
}

export default Contacts;