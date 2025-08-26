import React from 'react'
import './header.css'
import image from '../assets/image.png'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'

const Hero2 = () => {
    const products = [
        {
            id: 1,
            name: "Syltherine",
            desc: "Stylish cafe chair",
            price: 2500000,
            oldPrice: 3500000,
            status: "discount",
            discount: "-30%",
            img: image
        },
        {
            id: 2,
            name: "Leviosa",
            desc: "Stylish cafe chair",
            price: 2500000,
            oldPrice: null,
            status: null,
            discount: null,
            img: image1
        },
        {
            id: 3,
            name: "Lolito",
            desc: "Luxury big sofa",
            price: 7000000,
            oldPrice: 14000000,
            status: "discount",
            discount: "-50%",
            img: image2
        },
        {
            id: 4,
            name: "Respira",
            desc: "Outdoor bar table and stool",
            price: 500000,
            oldPrice: null,
            status: "new",
            discount: null,
            img: image3
        },
        {
            id: 5,
            name: "Grifo",
            desc: "Night lamp",
            price: 1500000,
            oldPrice: null,
            status: null,
            discount: null,
            img: image4
        },
        {
            id: 6,
            name: "Muggo",
            desc: "Small mug",
            price: 150000,
            oldPrice: null,
            status: "new",
            discount: null,
            img: image5
        },
        {
            id: 7,
            name: "Pingky",
            desc: "Cute bed set",
            price: 7000000,
            oldPrice: 14000000,
            status: "discount",
            discount: "-50%",
            img: image6
        },
        {
            id: 8,
            name: "Potty",
            desc: "Minimalist flower pot",
            price: 500000,
            oldPrice: null,
            status: "new",
            discount: null,
            img: image1
        }
    ];

    return (
        <div className="mt-20 mb-20 text-center">
                <h2 className="text-5xl font-bold mb-4">Our Products</h2>

        <div className="contain flex justify-center items-center gap-10 flex-wrap">

            {products.map(product => (
                <div key={product.id} className="w-[246px] h-[446px] bg-white rounded-xl shadow hover:shadow-lg transition relative">
                    <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-[300px]"
                    />
                    {product.status === "discount" && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                    )}
                    {product.status === "new" && (
                        <span className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                    )}
                    <div className='mr-30'>
                        <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                    <p className="text-gray-500 mb-2">{product.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                        <span className="text-[#b88e2f] font-bold text-base">
                            {product.price.toLocaleString()} so'm
                        </span>
                        {product.oldPrice && (
                            <span className="text-gray-400 line-through text-sm">
                                {product.oldPrice.toLocaleString()} so'm
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
        <button className='w-[245px] h-[48px] border border-[#b88e2f] text-[#b88e2f]'>Show More</button>
        </div>
    )
}

export default Hero2
