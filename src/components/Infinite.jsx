import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import './styles.css'
import NavBar from './NavBar';

const Infinite = ({ products }) => {
    const [visibleProducts, setVisibleProducts] = useState(products.slice(0, 7));
    const [hasMore, setHasMore] = useState(true)

    // console.log("visible products", visibleProducts)
    // console.log("has More", hasMore)

    function loadMoreProducts() {
        setTimeout(() => {
            const newProducts = products.slice(visibleProducts.length, visibleProducts.length + 7)
            setVisibleProducts(prev => [...prev, ...newProducts])
            console.log("visible products", visibleProducts)

            if (visibleProducts.length >= products.length)
                setHasMore(false)
        }, 1500)
    }

    return (
        <>
        <NavBar />
            <div className="heading">
                <h1>Infinte scrolling</h1>
            </div>
            <InfiniteScroll
                className='load'
                dataLength={visibleProducts.length}
                next={loadMoreProducts}
                hasMore={hasMore}
                loader={<p>Loading ...</p>}
                endMessage={<p>No more Products</p>}
                height={550}
            >
                <div className="product-list">
                    <ol >
                        {visibleProducts.map(product => (
                            <li key={product.id}>
                                <div className="product-item">
                                    <h3>{product.name}</h3>
                                    <p>Category: {product.category}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Colors: {product.color.join(', ')}</p>
                                    <p>Sizes: {product.size.join(', ')}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Infinite
