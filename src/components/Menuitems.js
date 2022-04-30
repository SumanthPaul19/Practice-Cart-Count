
import {useSelector,useDispatch} from 'react-redux'
import Items from './Items'
import {bindActionCreators} from 'redux'
import actionCreator from '../store/actionCreator'

function Menuitems(){
    const menu=useSelector(store=>store.menuReducer);
    const dispatch=useDispatch();
    const {addItem,removeItem}=bindActionCreators(actionCreator,dispatch);

    return(
        <div className="main-menu mt-5">
            {
                menu.map((menuObj,ind)=>{
                    return < Items menuObj={menuObj} key={ind} addItem={addItem} removeItem={removeItem}/>
                })
            }
            
        </div>
    )
}

export default Menuitems;