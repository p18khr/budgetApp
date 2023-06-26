export const add = (name,actual,planned)=>{
    return (dispatch)=>{
        dispatch({
            type:'ADD',
            payload:{'name':name,'actual':actual,'planned':planned}
        })
    } 
}

