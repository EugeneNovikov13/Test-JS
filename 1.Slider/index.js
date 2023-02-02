'use strict';

let arrWithImagesSrc = [];
(function getImages(){
    for(let i = 1; i <= 5; i++ ) {
        arrWithImagesSrc.push("img/" + i + ".jpg");
    }
})();

(function (imagesArr) {
    let slider = {
        offset: 0,
        init () {
            this.getHTML();
            this.createImgStage();
            this.arrowClickListener();
        },
        getHTML () {
            this.leftArrow = document.querySelector('.left_arrow img');
            this.rightArrow = document.querySelector('.right_arrow img');
            this.imgContainer = document.querySelector('.img_container');
        },
        createImgStage() {
            let stage = document.createElement('div');
            for (let elem of imagesArr) {
                stage.innerHTML += '<div class="img_item"><img src="' + elem + '" alt="'+ imagesArr.indexOf(elem) +'"></div>'
            }
            stage.classList.add('img_stage');
            this.imgContainer.appendChild(stage);
            this.imgStage = document.querySelector('.img_stage')
        },
        arrowClickListener() {
            document.addEventListener('click', this.click)
        },
        click(e) {
            if (e.target === slider.rightArrow) slider.rightClick()
            if (e.target === slider.leftArrow) slider.leftClick()
        },
        rightClick() {
            if (this.offset > -800 * (imagesArr.length-1)) {
                this.offset -= 800;
                this.imgStage.style.left = this.offset + 'px';
                this.leftArrow.style.opacity = '100%';
            }
            if (this.offset === -800 * (imagesArr.length-1)) this.rightArrow.style.opacity = '50%';

        },
        leftClick() {
            if (this.offset < 0) {
                this.offset += 800;
                this.imgStage.style.left = this.offset + 'px';
                this.rightArrow.style.opacity = '100%';
            }
            if (this.offset === 0) this.leftArrow.style.opacity = '50%';
        },
    }
    slider.init()
})(arrWithImagesSrc)
