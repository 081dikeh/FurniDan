import productImg1 from '../assets/ourProductassets/product-img1.png'
import productImg2 from '../assets/ourProductassets/product-img2.png'
import productImg3 from '../assets/ourProductassets/product-img3.png'
import productImg4 from '../assets/ourProductassets/product-img4.png'
import productImg5 from '../assets/ourProductassets/product-img5.png'
import productImg6 from '../assets/ourProductassets/product-img6.png'
import productImg7 from '../assets/ourProductassets/product-img7.png'
import productImg8 from '../assets/ourProductassets/product-img8.png'
import fullStar from '../assets/ourProductassets/fullstar.png'
import halfStar from '../assets/ourProductassets/halfstar.png'
import stars from '../assets/ourProductassets/4.5star.png'


const ourProducts = [
    {   
        id: 1,
        name: 'Syltherine',
        image: productImg1,
        type: 'Stylish cafe chair',
        price: 2.500,
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 3.500.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-30%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 2,
        name: 'Leviosa',
        image: productImg2,
        type: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 3.500.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-30%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 3,
        name: 'Lolito',
        image: productImg3,
        type: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 4,
        name: 'Respira',
        image: productImg4,
        type: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        StarRating: stars,
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
    {
        id: 5,
        name: 'Grifo',
        image: productImg5,
        type: 'Night lamp',
        price: 'Rp 1.500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 6,
        name: 'Muggo',
        image: productImg6,
        type: 'Small mug',
        price: 'Rp 150.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
    {
        id: 7,
        name: 'Pingky',
        image: productImg7,
        type: 'Cute bed set',
        price: 'Rp 7.000.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 8,
        name: 'Potty',
        image: productImg8,
        type: 'Minimalist flower pot',
        price: 'Rp 500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
    {   
        id: 9,
        name: 'Syltherine',
        image: productImg1,
        type: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 3.500.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-30%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 10,
        name: 'Leviosa',
        image: productImg2,
        type: 'Stylish cafe chair',
        price: 'Rp 2.500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 3.500.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-30%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 11,
        name: 'Lolito',
        image: productImg3,
        type: 'Luxury big sofa',
        price: 'Rp 7.000.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 12,
        name: 'Respira',
        image: productImg4,
        type: 'Outdoor bar table and stool',
        price: 'Rp 500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
    {
        id: 13,
        name: 'Grifo',
        image: productImg5,
        type: 'Night lamp',
        price: 'Rp 1.500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 14,
        name: 'Muggo',
        image: productImg6,
        type: 'Small mug',
        price: 'Rp 150.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
    {
        id: 15,
        name: 'Pingky',
        image: productImg7,
        type: 'Cute bed set',
        price: 'Rp 7.000.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: true,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: true,
            discountTag: '-50%'
        },
        new: {
            isTrue: false,
            newTag: 'New'
        }
    },
    {
        id: 16,
        name: 'Potty',
        image: productImg8,
        type: 'Minimalist flower pot',
        price: 'Rp 500.000',
        StarRating: stars,
        priceDiscount: {
            isTrue: false,
            slicedPrice: 'Rp 14.000.000'
        },
        discounted: {
            isTrue: false,
            discountTag: '-50%'
        },
        new: {
            isTrue: true,
            newTag: 'New'
        }
    },
]

export default ourProducts;



