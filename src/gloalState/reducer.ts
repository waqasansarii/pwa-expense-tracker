import {stateType,Action} from '../types/type'
 
export const Initial_state:stateType ={
     list:[
        {desc:'salary' , value:345,date:new Date().toDateString(),type:'income',id:'3.4343'},
     ]

}



export const reducer = (state:any  ,action:Action)=>{
    // console.log(state)
    // console.log(action.payload)
    switch (action.type) {
        case "Add":
            return{
                ...state,
                list:[...state.list,action.payload]
            };

        case "remove" :

            let filter = state.list.filter((val:any) => {return val.id!==action.payload.id})
            //  console.log(filter)
            return{
               ...state,
               list : [...filter]
            }    
    
        default:
            return state;
    }

}