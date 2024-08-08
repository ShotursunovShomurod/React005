// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { MdOutlineAddShoppingCart } from "react-icons/md";

// const API_URL = "https://dummyjson.com"


// const Product = () => {
//     const [offset, setOffset] = useState(1)
//     const handleClick = ()=>{
//         setOffset((prev)=> prev+1 )
//     }
//     const handleClick1 = ()=>{
//         setOffset((prev)=> prev-1 )
//     }
//     const [products, setProducts] = useState(null)
//     useEffect(() => {
//         axios
//             .get(`${API_URL}/products`)
//             .then(res => setProducts(res.data.products))
//             .catch(err => console.log(err))

//     }, [])

// const productItem = products?.map((product) => (
//     <div 
//         key={product.id} 
//         className='product__wrapper overflow-hidden group w-[370px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg  hover:cursor-pointer flex flex-col rounded-[30px]'>
//         <img src={product.images[0]} className='w-full h-[300px] object-contain' alt="" />
//         <p className='text-[red] font-bold'>{product.discountPercentage}%</p>
//         <h3 className='text-xl'>{product.title}</h3>
//         <p className='line-clamp-1'>{product.description}</p>
//         <p>{product.dimensions.width}x{product.dimensions.height} cm</p>
//         <p className='text-black text-3xl mb-10 mt-5 text font-bold'>{product.price} $</p>
//         <div className='product__button w-[320px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2'>
//             <div className="w-1/2 flex items-center gap-3">
//                 <button onClick={handleClick1} disabled={offset <= 1} className='flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]'>-</button>
//                 <p className='text-black'>{offset}</p>
//                 <button onClick={handleClick} className='flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl'>+</button>
//             </div>
//             <div className='w-1/2 flex justify-end'>
//                 <button className='w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl'>
//                     <MdOutlineAddShoppingCart />
//                 </button>
//             </div>
//         </div>
//     </div>
// ));

//     return (
//         <>
//             <div id="Product" className='mt-16'>
//                 <div className="container">
//                     <div className='flex  items-end mb-8'>
//                         <h2 className='font-extrabold text-4xl'>Скидки <span className='text-red-600 mr-3'>%</span></h2>
//                         <p className='font-bold'>Все товары в категории </p>
//                     </div>
//                     <div className='flex  justify-center flex-wrap'>
//                         {productItem}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Product
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const API_URL = "https://dummyjson.com";

const Product = () => {
    const [offset, setOffset] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/products`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    const handleClick = () => setOffset(prev => prev + 1);
    const handleClick1 = () => setOffset(prev => Math.max(prev - 1, 1));  // Ensure offset doesn't go below 1

    const productItem = products.map((product) => (
        <div 
            key={product.id} 
            className='product__wrapper overflow-hidden group w-[300px] mt-7 relative duration-300 p-4 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]'>
            <img src={product.images?.[0]} className='w-full h-[300px] object-contain' alt={product.title} />
            <p className='text-[red] font-bold'>{product.discountPercentage}%</p>
            <h3 className='text-xl'>{product.title}</h3>
            <p className='line-clamp-1'>{product.description}</p>
            {product.dimensions && (
                <p>{product.dimensions.width}x{product.dimensions.height} cm</p>
            )}
            <p className='text-black text-3xl mb-10 mt-5 font-bold'>{product.price} $</p>
            <div className='product__button w-[320px] items-center flex absolute transition-all duration-300 -bottom-20 left-4 group-hover:bottom-2'>
                <div className="w-1/2 flex items-center gap-3">
                    <button onClick={handleClick1} disabled={offset <= 1} className='flex items-center justify-center border w-[14px] h-[14px] pb-1 border-[#7d7d7d] text-[#7d7d7d] text-1xl rounded-[5px]'>-</button>
                    <p className='text-black'>{offset}</p>
                    <button onClick={handleClick} className='flex items-center justify-center pb-1 border w-[14px] h-[14px] border-[#7d7d7d] text-[#7d7d7d] rounded-[5px] text-1xl'>+</button>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <button className='w-[48px] h-[48px] bg-yellow-400 rounded-[50%] flex items-center justify-center text-white text-3xl'>
                        <MdOutlineAddShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <div id="Product" className='mt-16'>
            <div className="container">
                <div className='flex items-end mb-8'>
                    <h2 className='font-extrabold text-4xl'>Скидки <span className='text-red-600 mr-3'>%</span></h2>
                    <p className='font-bold'>Все товары в категории</p>
                </div>
                <div className='flex justify-center flex-wrap'>
                    {productItem}
                </div>
            </div>
        </div>
    );
};

export default Product;
