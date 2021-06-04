var elements = document.querySelectorAll('.carousel');
function initializeCarousel() {
    let groupCells = 2;
    let width = window.innerWidth;
    switch (true) {
        case (width >= 530 && (width < 640)):
            groupCells = 3;
            break;
        case (width >= 640 && (width < 770)):
            groupCells = 4;
            break;
        case (width >= 770 && (width < 1024)):
            groupCells = 4;
            break;
        case (width >= 1024 && (width < 1450)):
            groupCells = 5;
            break;
        case (width >= 1450):
            groupCells = 6;
            break;
    }
    elements.forEach((element) => {
        var flkty = new Flickity(element, {
            groupCells: groupCells,
            freeScroll: true
        });
    });
}
window.onresize = (event) => {
    initializeCarousel();
}

function showMore(object) {
    console.log(object)
}