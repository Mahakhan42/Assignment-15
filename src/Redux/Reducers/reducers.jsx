const Initial_State = {
    User_data: []

}

export const todoreducers =(state = Initial_State,action)=>{
    switch(action.type){
        case "Add_DATA":

            return{
                ...state,
                User_data:[...state.User_data,action.payload]
            }
            case "RMV_DATA" : 
            const dltdata = state.User_data.filter((todo,index)=>index !== action.payload)
            return{
                ...state,
                User_data:dltdata
            }
            case "UPDATE_DATA": 
            const updatedata = state.User_data.map((todo, index) => index === action.d ? action.payload : todo); 
            return {
                ...state,
                User_data: updatedata
            };
        
            default:
                return state
    }
}