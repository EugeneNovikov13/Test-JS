let arrWithImagesSrc = ['https://traveller-eu.ru/sites/default/files/inline-images/ratusha_i_ratushnaia_ploshchad_2-750x523.jpg',
                        'https://traveller-eu.ru/sites/default/files/inline-images/1452866375_2048x1375_690699_www.artfile.ru-750x503.jpg',
                        'https://traveller-eu.ru/sites/default/files/inline-images/4382162642_397c647043_c-1.jpg',
                        'https://traveller-eu.ru/sites/default/files/inline-images/863-800x500.jpeg',
                        'https://traveller-eu.ru/sites/default/files/inline-images/1449864462_fotolia_36139967_subscription_l-01-750x375.jpeg'];

class Slider {
    constructor(arr, left, right, stage) {
        this.arr = arr;
        this.left = document.querySelector(left);
        this.right = document.querySelector(right);
        this.stage = document.querySelector(stage);
        this.offset = 0;
    }
    createImgStage() {
        for (let elem of this.arr) {
            this.stage.innerHTML += '<div class="img_item"><img src="' + elem + '" alt="N/A"></div>'
        }
    };
    click() {
        document.addEventListener('click', (e) => {
            if (e.target === this.right) this.rightClick()
            if (e.target === this.left) this.leftClick()
        })
    };
    rightClick() {
        if (this.offset > -800 * (this.arr.length-1)) {
            this.offset -= 800;
            this.stage.style.left = this.offset + 'px';
            this.left.style.opacity = '100%';
        }
        if (this.offset === -800 * (this.arr.length-1)) this.right.style.opacity = '50%';

    };
    leftClick() {
        if (this.offset < 0) {
            this.offset += 800;
            this.stage.style.left = this.offset + 'px';
            this.right.style.opacity = '100%';
        }
        if (this.offset === 0) this.left.style.opacity = '50%';
    };
}
let slider = new Slider(arrWithImagesSrc, ".gallery_navigation__left-arrow",
                                         ".gallery_navigation__right-arrow",
                                         ".gallery_img-container__img-stage");
slider.createImgStage();
slider.click();

