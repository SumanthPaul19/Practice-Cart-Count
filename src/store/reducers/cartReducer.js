
const cartReducer=(state=[],action)=>{
    if (action.type=== 'ADD-ITEM'){
        //if state is empty
        if(state.length===0){
            let newItem={
                item:action.item,
                count:1,
                price:action.price,
                totalPrice:action.price
            }
            return [...state,newItem]
        }
        //if state is non-empty
        else{
            let filteredState=state.filter((itemObj)=>itemObj.item===action.item)
            //if item is not existed
            if(filteredState.length===0){
                //create new item
                let newItem={
                    item:action.item,
                    count:1,
                    price:action.price,
                    totalPrice:action.price
                }
                return [...state,newItem]
            }
            //if item is existed
            else{
                state.forEach((itemObj,ind)=>{
                    //if items are matched, then replace
                    if(itemObj.item===action.item){
                        let modifiedObj={
                            item:action.item,
                            count:itemObj.count+1,
                            price:action.price,
                            totalPrice:itemObj.totalPrice+action.price
                        }

                        //replace
                        state=[...state.slice(0,ind),modifiedObj,...state.slice(ind+1)]
                    }
                })
                return state;
            }
        }
    }

    else if(action.type === 'REMOVE-ITEM'){

        if (state.length === 0) {
           return state
       }
       //if state is no -empty
       else {
           let filteredState = state.filter((itemObj) => itemObj.item === action.item)
           //if item is not existed
           if (filteredState.length === 0) {
               return state
           }
           //if item is existed
           else {
               state.forEach((itemObj, ind) => {
                   //if items are matched, the replace
                   if (itemObj.item === action.item && itemObj.count>0) {
                       let modifiedObj = {
                           item: action.item,
                           count: itemObj.count -1 ,
                           price: action.price,
                           totalPrice: itemObj.totalPrice - action.price
                       }
                       if(modifiedObj.count===0)
                       {
                           state = [...state.slice(0, ind),...state.slice(ind + 1)] 
                       }
                       else{
                           state = [...state.slice(0, ind), modifiedObj, ...state.slice(ind + 1)]  
                       }
                       //replace

                   }
               })

               return state;

           }

       }

   }

   else {
       return state;
   }
}

export default cartReducer;