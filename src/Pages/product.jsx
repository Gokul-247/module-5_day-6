import React from 'react'
import CustomButton from '../components/CustomButton'
import Product_item1 from '../components/Product_item'


function Products() {
  return (
    <div>
       <h1>Products Page</h1>
       <Product_item1 p_name='Soap' p_id='100' p_mrp='50' p_qty='30' p_col='white' /> 
       <hr/>
       <Product_item1 p_name='Jam' p_id='101'  p_mrp='20' p_qty='50' p_col='red' /> 
       <hr/>
       <Product_item1 p_name='Bread' p_id='102'  p_mrp='30' p_qty='30' p_col='brown' /> 
      
    </div>
  )
}
export default Products