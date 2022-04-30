
const addItem=(itemObj)=>{
    return(dispatch)=>{
        dispatch({
            type:"ADD-ITEM",
            item:itemObj.item,
            price:itemObj.price
        })
    }
}

const removeItem=(itemObj)=>{
    return(dispatch)=>{
        dispatch({
            type:"REMOVE-ITEM",
            item:itemObj.item,
            price:itemObj.price 
        })
    }
}

export default {addItem,removeItem}