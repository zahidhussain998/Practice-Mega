/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Container from '../container/Container';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { add } from '@/reducers/Reducers';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
function Product() {
    const navigate = useNavigate();

     const id = useId()

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Accept product as a parameter and navigate with that product's details
    const handleAdd = (product) => {
        dispatch(add(product))
       
    };

    return (
        <div>
            <Container>
                <div className='flex flex-wrap justify-center'>
                    {products.map((product) => (
                        <div key={product.id} className='m-4 w-80'>
                            <div className='border rounded-lg shadow-lg'>
                                <img src={product.image} alt={product.title} className='w-full h-80 object-cover' />
                                <div className='p-4'>
                                    <h2 className='text-xl font-semibold'>{product.title}</h2>
                                    <p className='text-sm text-gray-500'>{product.description}</p>
                                    <p className='text-lg font-semibold'>${product.price}</p>
                                </div>
                            </div>
                            <Button onClick={() => handleAdd(product)}
                                className='bg-blue-600'>
                                Add to Cart
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default React.memo(Product);
