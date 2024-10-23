import React from 'react'

function Product_item1 ( {
        p_name = "default Name",
        p_id = "default Id",
        p_mrp = "default MRP",
        p_qty = "default Quantity",
        p_col = "default Color"
}) {
  return (
    <div>
         <table border = "1">
                <tr>
                    <td>Name</td>
                    <td>{p_name}</td>
                </tr>
                <tr>
                    <td>Id</td>
                    <td>{p_id}</td>
                </tr>
                <tr>
                    <td>MRP</td>
                    <td>{p_mrp}</td>   
                </tr>
                <tr>
                    <td>Quantity</td>
                    <td>{p_qty}</td>
                </tr>
                <tr>
                    <td>Color</td>
                    <td>{p_col}</td>
                </tr>
            </table>
    </div>
  )
}

export default Product_item1