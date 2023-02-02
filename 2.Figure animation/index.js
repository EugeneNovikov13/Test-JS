circle = document.querySelector('.circle');
triangle = document.querySelector('.triangle');
square = document.querySelector('.square');
rectangle = document.querySelector('.rectangle');

document.addEventListener('click', animation);

function animation(e) {
    if (e.target === circle) circle.classList.toggle('active_circle');
    if (e.target === triangle) triangle.classList.toggle('active_triangle');
    if (e.target === square) square.classList.toggle('active_square');
    if (e.target === rectangle) rectangle.classList.toggle('active_rectangle');
}
