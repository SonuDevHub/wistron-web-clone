import React, { useContext, useEffect, useState } from 'react'
import { products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import Product from '../pages/Product';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subcategory }) => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        setLatestProducts(products.slice(0, 5));
    }, [])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED '} text2={'PRODUCTS'} />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedProducts