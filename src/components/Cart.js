import {useSelector} from 'react-redux'

function Cart(){

    const cart =useSelector(store=>store.cartReducer);
    console.log('cart reducer is',cart);

    const getCount=()=>{
        if(cart.length===0){
            return 0;
        }
        else {
            let totalCount=0;
            cart.forEach(itemObj=>{
                totalCount=totalCount+itemObj.count;
            })
        return totalCount;
    }
    
}


return(
    <div>
        <button className="btn btn-info ">
            Cart<span className="badge bg-warning text-dark ms-2 me-2">{getCount()}</span>
        </button>
             
    </div>
    )

}
export default Cart;