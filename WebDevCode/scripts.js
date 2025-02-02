document.querySelectorAll('.next').forEach(btn => {
    btn.onclick = () => slide(btn.parentNode, 'next');
});

document.querySelectorAll('.prev').forEach(btn => {
    btn.onclick = () => slide(btn.parentNode, 'prev');
});

function slide(container, direction) {
    let slider = container.querySelector('.gallery-slider');
    let slideWidth = container.clientWidth; // Get the width of the container to move one full image width
    let currentTransform = getComputedTransformX(slider);

    if (direction === 'next') {
        if (currentTransform > -(slider.scrollWidth - slideWidth)) {
            slider.style.transform = `translateX(${currentTransform - slideWidth}px)`;
        }
    } else {
        if (currentTransform < 0) {
            slider.style.transform = `translateX(${currentTransform + slideWidth}px)`;
        }
    }
}

function getComputedTransformX(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41; // horizontal translate
}
