const initialState=[
    {id:1,item:"Biryani",price:350},
    {id:2,item:"Soup",price:100},
    {id:3,item:"Tandoori",price:450},
    {id:4,item:"Curd rice",price:150},
    {id:5,item:"Mushroom",price:30},
    {id:6,item:"Fried rice",price:200}
]

const menuReducer=(state=initialState,action)=>{
    return state;

}

export default menuReducer;