function component() {
    return {
        showModal: false,
        focusedImage: false,
        focusedDescription: false,
        focusedName: false,
        focusedPrice: false,
        drinks: [
            {
                img: 'images/sprite.png',
                name: 'Sprite',
                price: '150',
                desc: " One quantity is a single 35cl bottle."
            },
            {
                img: 'images/teem.jpg',
                name: 'Teem',
                price: '200',
                desc: " One quantity is a single 60cl bottle."
            },
            {
                name: 'Maltina',
                price: '200',
                img: 'images/MALTINA.jpg',
                desc: "One quantity is a single 35cl bottle."
            },
            {
                name: 'Fanta',
                price: '200',
                img: 'images/Fanta.png',
                desc: "One quantity is a single 33cl can."
            },
            {
                name: 'Coca cola',
                price: '200',
                img: 'images/coca-cola.png',
                desc: " One quantity is a single 33cl can."
            },
            {
                name: 'Smoov Chapman',
                price: '200',
                img: 'images/chapman.jpg',
                desc: ' One quantity is a single 50cl bottle.'
            },
        ],
        snacks: [
            {
                img: 'images/butter-cake.jpg',
                name: 'Butter Cake',
                price: '300',
                desc: " One quantity is a single slice."
            },
            {
                img: 'images/biscuit-cake.jpg',
                name: 'Biscuit Cake',
                price: '300',
                desc: " One quantity is a single slice."
            },
            {
                name: 'Strawberry Ice Cream',
                price: '500',
                img: 'images/strawberry.jpg',
                desc: "One quantity is a single cup."
            },
            {
                name: 'Vanilla Ice Cream',
                price: '500',
                img: 'images/vanilla.jpg',
                desc: "One quantity is a single cup."
            },
            {
                name: 'Chocolate Ice Cream',
                price: '500',
                img: 'images/cholcolate.jpg',
                desc: " One quantity is a single cup."
            },
            {
                name: 'Chicken Pie',
                price: '300',
                img: 'images/chicken-pie-1.jpg',
                desc: ' One quantity is a single pie.'
            },
            {
                name: 'Meat Pie',
                price: '300',
                img: 'images/meat-pie.jpg',
                desc: ' One quantity is a single pie.'
            },
            {
                name: 'Chicken Shawarma',
                price: '1000',
                img: 'images/chicken-shawarma.jpg',
                desc: ' One quantity is a single wrap.'
            },
            {
                name: 'Goat Meat Shawarma',
                price: '1000',
                img: 'images/shawarma-goat.jpg',
                desc: ' One quantity is a single wrap.'
            },
            {
                name: 'Fish Shawarma',
                price: '1000',
                img: 'images/fish-shawarma.jpg',
                desc: ' One quantity is a single wrap.'
            },
        ],
        
        soups: [
            {
                img: 'images/diaspora-vegetable-soup.jpg',
                name: 'Vegetable Soup',
                price: '400',
                desc: " One quantity is a single plate."
            },
            {
                img: 'images/best-nigerian-okra-soup-recipe.jpg',
                name: 'Okra Soup',
                price: '400',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Nsala (White Soup)',
                price: '400',
                img: 'images/ofe-nsala.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Ofe Owerri',
                price: '400',
                img: 'images/ofe-owerri.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Oha (Ora Soup)',
                price: '400',
                img: 'images/best-ora-soup-oha-soup-recipe.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Catfish pepper Soup',
                price: '400',
                img: 'images/catfish-pepper-soup.jpg',
                desc: 'One quantity is a single plate.'
            },
        ],
        
        stews: [
            {
                img: 'images/chicken-stew.jpg',
                name: 'Chicken Stew',
                price: '400',
                desc: " One quantity is a single plate."
            },
            {
                img: 'images/beef-stew.jpg',
                name: 'Bee Stew',
                price: '400',
                desc: " One quantity is a single plate."
            },
            {
                name: 'Turkey',
                price: '400',
                img: 'images/turkey-stew.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Ofe Akwu (Banga)',
                price: '400',
                img: 'images/ofe-akwu.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Garden Egg Sauce',
                price: '400',
                img: 'images/garden-egg-sauce.jpg',
                desc: " One quantity is a single plate."
            },
        ],
        
        swallows: [
            {
                img: 'images/garri.jpg',
                name: 'Eba (Garri)',
                price: '100',
                desc: " One quantity is a single wrap."
            },
            {
                img: 'images/fufu.jpg',
                name: 'Fufu (Akpu)',
                price: '100',
                desc: " One quantity is a single wrap."
            },
            {
                name: 'Agidi (White)',
                price: '100',
                img: 'images/agidi.jpg',
                desc: "One quantity is a single wrap."
            },
            {
                name: 'Agidi (Jollof)',
                price: '100',
                img: 'images/agidi-jollof.jpg',
                desc: "One quantity is a single wrap."
            },
            {
                name: 'Boiled yam',
                price: '300',
                img: 'images/yam.jpg',
                desc: "One quantity is 4 piece of Yam."
            },
        ],
        
        grains: [
            {
                img: 'images/LR-jollof-rice.jpeg',
                name: 'Jollof Rice',
                price: '400',
                desc: " One quantity is a single plate."
            },
            {
                img: 'images/jollof-spaghetti.jpeg',
                name: 'Jollof Spaghetti',
                price: '400',
                desc: " One quantity is a single plate."
            },
            {
                name: 'Fried Rice',
                price: '200',
                img: 'images/fried-rice.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'Coconut Rice',
                price: '400',
                img: 'images/coconut-rice.jpg',
                desc: "One quantity is a single plate."
            },
            {
                name: 'White Rice',
                price: '250',
                img: 'images/white-rice.jpg',
                desc: " One quantity is a single plate."
            },
            {
                name: 'Noodles',
                price: '300',
                img: 'images/indomie-with-boiled-egg.jpg',
                desc: 'One quantity is a single plate and a single Boiled egg.'
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