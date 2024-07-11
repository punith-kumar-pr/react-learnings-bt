import React from 'react'
import './styles.css'
import NavBar from './NavBar'

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className='product-list'>
        <h1>PAGE NOT FOUND</h1>
        <h3>Please check the link</h3>
      </div>
    </>
  )
}

export default NotFound
