function component() {
    return {
        showModal: false,
        focusedImage: false,
        focusedDescription: false,
        focusedName: false,
        focusedPrice: false,
        drinks: [
            {
                img: 'images/pexels-evg-culture-1187766.jpg',
                name: 'Sample product 1',
                price: '500',
                desc: 'am sample description hdgghgsgsggytgsghssssssssssssssssshhedygsyuuuuuuuuusevtudgsuyzhcuisha98djwpesdncjksdvbsdhv fduvbislv.dsjvdsnlkcds;jcmfjsa;cn.sajkc.sa mcsancsihcbsdhcvdsh jhshshshhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxz'
            },
            {
                img: 'images/pexels-thiszun-follow-me-on-ig-fb-1148215.jpg',
                name: 'Sample product 2',
                price: '200',
                desc: 'am sample description'
            },
            {
                name: 'Sample product 3',
                price: '400',
                img: 'images/pexels-prem-pal-singh-tanwar-602750.jpg',
                desc: 'am sample description'
            },
            {
                name: 'Sample product 4',
                price: '600',
                img: 'images/pexels-artem-beliaikin-2668308.jpg',
                desc: 'am sample description'
            },
            {
                name: 'Sample product 5',
                price: '700',
                img: 'images/pexels-julia-sakelli-905485.jpg',
                desc: 'am sample description'
            },
        ],
        showMore: function (img, desc, name, price) {
            this.showModal = true;
            this.focusedImage = img;
            this.focusedDescription = desc;
            this.focusedName = name;
            this.focusedPrice = price;
        },
        initializeCarousel: function () {
            var elements = document.querySelectorAll('.carousel');
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
        },
        initialize: function () {
            this.initializeCarousel();
            window.onresize = (event) => {
                this.initializeCarousel();
            }
        }
    }
}