import main_img2 from '../../images/airforce.webp';



const data = [
    {
        id: 1,
        name: "fall limited edition sneakers",
        company: "Sneaker Company",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
        main_image: require('../../images/image-product-1.jpg'),
        thumbnails: [
            require('../../images/image-product-1-thumbnail.jpg'),
            require('../../images/image-product-2-thumbnail.jpg'),
            require('../../images/image-product-3-thumbnail.jpg'),
            require('../../images/image-product-4-thumbnail.jpg')
        ],
        old_price: 250,
        price: 280,
        cart: []
        
    },
    {
        id: 2,
        name: "nike air force 1 shadow",
        company: "nike",
        description: `The Nike Air Force 1 Shadow puts a playful twist on a classic b-ball design.Using a layered approach, doubling the branding and exaggerating the midsole, it highlights AF-1 DNA with a bold, new look.
        Colour Shown: Summit White/Yellow Ochre/Lapis/Neptune Green
        Style: CI0919-118`,
        main_image: require("../../images/airforce.webp") ,
        thumbnails: [
            require("../../images/airforce.webp"),
            require("../../images/airforce-tb-1.webp"),
            require("../../images/airforce-tb-2.webp"),
            require("../../images/airforce-tb-3.webp")
        ],
        old_price: 114.95,
        price: 114.95,
        cart: []

    },
    {
        id: 3,
        name: " Nike Air Zoom Alphafly NEXT% 2",
        company: "nike",
        description: `Once you take a few strides in the Nike Air Zoom Alphafly NEXT% 2, you'll never look at your favourite pair of old racing shoes the same way again. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system marries the 2 worlds of comfort and speed in holy running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.
        Colour Shown: Total Orange/Bright Crimson/Ghost Green/Black
        Style: DN3555-800`,
        main_image: require('../../images/alphafly.webp'),
        thumbnails: [
            require("../../images/alphafly.webp"),
            require("../../images/alphafly-tb-1.webp"),
            require("../../images/alphafly-tb-2.webp"),
       require("../../images/alphafly-tb-3.webp"),
        require("../../images/alphafly-tb-4.webp"),
         ],
         old_price: 269.95,
        price: 269.95,
        cart: []

    }
]

export default data;