//Честно говоря, с дебаунсами раньше не сталкивался. Написал код, насколько разобрался в теме.

let debounce = (func, ms) => {
    let timeout;
    return function () {
        let fnCall = () => {func.apply(this)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    };
}
onClick = debounce(onClick, 333)

document.querySelector('button').addEventListener('click', onClick)
hideDiv = document.querySelectorAll('.hideDiv');

function onClick() {
    for (let elem of hideDiv) elem.classList.toggle('visible_block')
}




