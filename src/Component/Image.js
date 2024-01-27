import React from 'react'
import product from '../product'

const Image = () => {
  return (
    <div><img src={product.url} alt='meuble' style={{width:'13em'}}></img></div>
  )
}

export default Image