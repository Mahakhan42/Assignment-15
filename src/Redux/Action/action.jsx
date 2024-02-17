export const Add =(items)=>{
    return{
        type:"Add_DATA",
        payload: items
    }
}
export const Remove =(id)=>{
    return{
        type:"RMV_DATA",
        payload: id
    }
}
export const Update_data = (index, updatedItem) => {
    return {
        type: "UPDATE_DATA",
        payload: updatedItem,
        d: index
    };
};
