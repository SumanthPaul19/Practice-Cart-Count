import React from 'react'

function Item(props){
    const menuObj=props.menuObj;
    const addItem=props.addItem;
    const removeItem=props.removeItem;
    return(
        <ul className="list-unstyled bg-light d-flex justify-content-between p-3 shadow-sm">
            <li className="text-primary h6">{menuObj.item}</li>
            <li className="text-info h6 ms-auto">
                <span className="increment bg-light" onClick={()=>addItem(menuObj)}>+</span>
                 Rs.{menuObj.price}</li>
                <span className="decrement bg-light mb-3" onClick={()=>removeItem(menuObj)}>-</span>
        </ul>
    )
}
export default Item;