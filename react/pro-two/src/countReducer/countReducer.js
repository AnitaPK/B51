export const initialState = {count:0}


export function reducer(state, action){
    switch (action.type) {
        case 'increament':
            return {count:state.count +1}
        case 'decrement':
            return {count:state.count -1}
        case 'reset':
            return {count:0}
        default:
            return state
    }
}


// export {initialState,reducer}