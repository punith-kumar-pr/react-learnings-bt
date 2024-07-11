import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, getItemSelector} from '../redux/slices/cartSlice'
import NavBar from './NavBar'


const Cart = () => {

    const items = useSelector(getItemSelector)
    const dispatch = useDispatch()
    console.log(items)
    return (
        <>
        <NavBar />
            <p>This is cart</p>
            <div className="product-list">
                <Link to="/pagination">
                    <button className='button'>Products</button>
                </Link>
                <h3>Total items: {items.length} <br/> Total cost: {items.reduce((a,b) => a+b.price, 0)} </h3>
                {!items? (<h1>Cart empty</h1>) : (
                <ul >
                    {items.map(product => (
                        <li key={product.id} >
                            <div className="product-item">
                                <h3>{product.name}</h3>
                                <p>Category: {product.category}</p>
                                <p>Price: ${product.price}</p>
                                <p>Colors: {product.color.join(', ')}</p>
                                <p>Sizes: {product.size.join(', ')}</p>
                                <button onClick={(e) => dispatch(removeItem(product))}>
                                    Remove from cart
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
)}
            </div>
        </>

    )
}

export default Cart
