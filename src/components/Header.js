import React from 'react'
import Cart from './Cart'

function Header(){
    return(
        <ul className="list-unstyled d-flex justify-content-around bg-dark text-white p-3">
            <li className="h3 text-warning">Foodie</li>
            <li className="">
                <Cart/>
            </li>
        </ul>
    )
}

export default Header;