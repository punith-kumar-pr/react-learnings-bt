import React, { useState } from 'react'
import './styles.css'
import { ShareSocial } from 'react-share-social'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getItemSelector } from "../redux/slices/cartSlice"
import NavBar from './NavBar';


const Product = ({ products }) => {
    // console.log(products)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isProductSelected, setIsProductSelected] = useState(null);
    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 10;

    const dispatch = useDispatch()
    const items = useSelector(getItemSelector)
    console.log(items)


    // shareOnSocial
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1)
        const productarray = products.filter(product => Object.values(product));
        const filtered = products.filter(product =>
            Object.values(product)
                .filter(value => typeof value === 'string') // Filter out non-string values
                .some(value => value.toLowerCase().includes(event.target.value.toLowerCase()))
        );
        setFilteredProducts(filtered);
    };

    const handleProductClick = (path) => {
        console.log("click")
        console.log(path)
        setIsProductSelected('https://socialshareexample.com/' + path)
    }

    function onClose() {
        setIsProductSelected(null);
    }

    const ShareToSocial = ({ URL, onClose }) => {
        return (
            <>
                <button onClick={onClose}>close</button>
                <ShareSocial
                    url={URL}
                    socialTypes={['facebook', 'twitter', 'linkedin', 'whatsapp']}
                />
            </>
        )
    }

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    // Pagination function
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <NavBar/>
            <div className="heading">
                <h1>Infinte scrolling</h1>
            </div>
            <div className="product-list">
                <Link to="/cart">
                    <button className='button'>Cart {items.length}</button>
                </Link>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {isProductSelected ? (
                    <ShareToSocial URL={isProductSelected} onClose={onClose} />
                ) : (
                    <>
                        <ul >
                            {currentProducts.map(product => (
                                <li key={product.id} >
                                    <div className="product-item">
                                        <h3>{product.name}</h3>
                                        <button onClick={() => handleProductClick(product.name + "/" + product.id)}>Share</button>
                                        <p>Category: {product.category}</p>
                                        <p>Price: ${product.price}</p>
                                        <p>Colors: {product.color.join(', ')}</p>
                                        <p>Sizes: {product.size.join(', ')}</p>
                                        <button
                                            onClick={ (e) => dispatch(addItem(product)) }>
                                            Add to cart
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="pagination">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={indexOfLastProduct >= filteredProducts.length}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Product


