/* eslint-disable no-unused-vars */
import React from 'react'
import Container from './container/Container'
import Product from './Products/Product'

function Banner() {
  return (
    <div className=''>
        <Container>

        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className=''>
                <h1 className='text-4xl'>Welcome to our store</h1>
                <p className='text-lg'>Get the best products at the best price</p>
            </div>
            <div>
                <img src='https://i.imgur.com/9EAYZrtl.jpg' alt='banner' className=' md:h-auto md:w-full  pt-20 ' />
            </div>
        </div>
        </Container>
    </div>
  )
}

export default Banner