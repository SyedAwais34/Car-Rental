import banner from './banner.jpg'
import header from './header.jpg'
import logo from './logo.png'
import about from './about-info-image-2.jpg'
import contact from './contact us.jpg'
import cover from './Car cover.jpg'
import bulbs from './car bulb.png'
import stripe from './stripe_logo.png'
import razor from './razorpay_logo.png'


import car1 from './car1.jpg'
import car2 from './car2.jpg'
import car3 from './car3.jpg'
import car4 from './car4.jpg'


export const assets = {
    banner,
    header,
    logo,
    about,
    contact,
    cover,
    bulbs,
    stripe,
    razor
}

export const products = [
    {
        _id: "aaaaa",
        name: "2013 Cadillac CTS 3.6L Premium",
        description: "2013 CADILLAC CTS 3.6L PREMIUM SEDAN AWD! LOW MILES! FINANCING AVAILABLE!",
        price: 137,
        image: [car1,car2,car3,car4],
        category: "car",
        subcategory: "car",
        make: "BMW",
        model: "i7",
        year: 2020,
        condition: "Used",
        transmission: "Automatic",
        engine: "3.6L V6 318hp 275ft. lbs.",
        fuelType: "Petrol",
        interiorcolor: "Black",
        exteriorcolor: "White",
        stocknum: "N100642",
    },
    {
        _id: "aaaab",
        name: "Sedan",
        description: "A brand New Car",
        price: 1000,
        image: [car2],
        category: "Sedan",
        subCategory: "Type-1",
        make: "Audi",
        model: "A4",
        year: 2019,
        condition: "Brand New",
        transmission: "Automatic",
        engine: "3.6L V6 318hp 275ft. lbs.",
        fuelType: "Petrol",
        interiorcolor: "Black",
        exteriorcolor: "White",
        stocknum: "N100642",
    },
    {
        _id: "aaaac",
        name: "Sedan",
        description: "A brand New Car",
        price: 60,
        image: [car3],
        category: "Sedan",
        subCategory: "Type-3",
        make: "BMW",
        model: "i7",
        year: 2020,
        condition: "Used",
        transmission: "Automatic",
        engine: "3.6L V6 318hp 275ft. lbs.",
        fuelType: "Petrol",
        interiorcolor: "Black",
        exteriorcolor: "White",
        stocknum: "N100642",
    },
    {
        _id: "aaaad",
        name: "Sport Car",
        description: "A brand New Car",
        price: 100,
        image: [car4],
        category: "Sport-car",
        subCategory: "Type-2",
        make: "Audi",
        model: "A4",
        year: 2019,
        condition: "Brand New",
        transmission: "Automatic",
        engine: "3.6L V6 318hp 275ft. lbs.",
        fuelType: "Petrol",
        interiorcolor: "Black",
        exteriorcolor: "White",
        stocknum: "N100642",
    },
    {
        _id: "aaaae",
        name: "Car Cover",
        price: 30,
        category: "caritem", // This is for sale
        image: [cover],
        description: "Waterproof car cover.",
        quantity: 50,
        bestseller: true
      },
    {
        _id: "aaaaf",
        name: "Car Cover",
        price: 30,
        category: "caritem", // This is for sale
        image: [cover],
        description: "Waterproof car cover.",
        quantity: 10,
        bestseller: true
      }, 
    {
        _id: "aaaag",
        name: "Car Cover",
        price: 30,
        category: "caritem", // This is for sale
        image: [bulbs],
        description: "Waterproof car cover.",
        quantity: 30,
        bestseller: true
      },
    {
        _id: "aaaah",
        name: "Car Cover",
        price: 30,
        category: "caritem", // This is for sale
        image: [bulbs],
        description: "Waterproof car cover.",
        quantity: 20,
        bestseller: true
      }
]
