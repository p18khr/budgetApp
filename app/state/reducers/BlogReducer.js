const reducer = (state=[{'name':'grocery','actual':'200','planned':'1000'}],action)=>{
        if(action.type === 'ADD'){
            state.push(action.payload);
        }
        
        return state;
}

export default reducer;