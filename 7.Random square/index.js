(function (button, container) {
    let createBlocks = {
        btn: document.getElementById(button),
        cont: document.getElementById(container),
        init() {
            this.btn.addEventListener('click', this.addBlocks);
            this.cont.addEventListener('click', this.deleteBlock);
        },
        addBlocks() {
            let num = Math.round(Math.random()*90 + 10);
            while (num != 0) {
                let newBlock = document.createElement('div');
                newBlock.classList.add('newBlock');
                newBlock.style.background = `rgb( ${Math.round(255 * Math.random())} ,
                                              ${Math.round(255 * Math.random())} , 
                                              ${Math.round(255 * Math.random())} )`;
                createBlocks.cont.appendChild(newBlock);
                num--;
            }
        },
        deleteBlock(e) {
            if (e.target.parentElement === createBlocks.cont) {
                createBlocks.cont.removeChild(e.target);
            }
        }
    };
    createBlocks.init();
})('add-blocks-button', 'container')
