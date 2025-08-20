export const initialState = {
  todos: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload)
      const { name, description } = action.payload;
      if (!name?.trim()) return state; // ignore empty names
      const newTodo = {
        id: Date.now(),
        name: name.trim(),
        description: (description || "").trim(),
        isComplete: false,
      };
      return { ...state, todos: [newTodo, ...state.todos] };

    // case 'LOAD_TODOS':

    default:
      return state;
  }
}



// state = {
//     working:true,
//     todos:[{id:1,name:"erty",description:"dfghjk",isComplete:false}]
// }

// newTodo = {id:2,name:"erty erty",description:" df dfgh gh dfghjk",isComplete:false}