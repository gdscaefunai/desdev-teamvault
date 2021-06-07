function component() {
    return {
        showModal: false,
        focusedImage: false,
        focusedDescription: false,
        focusedName: false,
        focusedPrice: false,
        members: [
            {
                img: 'images/james.jpg',
                name: 'James',
                post: 'Team Lead'
            },
            {
                img: 'images/john.jpg',
                name: 'John'
            },  
            {
                img: 'images/lyka.jpg',
                name: 'Lyka'
            },  
            {
                img: 'images/favour.jpg',
                name: 'Favour'
            },  
            {
                img: 'images/victor.jpg',
                name: 'Victor'
            },  
            {
                img: 'icons/user.jpg',
                name: 'Stephanie'
            },           
        ],
        showMore: function (img, name, post) {
            this.showModal = true;
            this.focusedImage = img;
            this.focusedName = name;
            this.focusedPost = post;
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