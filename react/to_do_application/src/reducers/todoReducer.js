export const initialState = {
  todos: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      const { name, description } = action.payload;
      if (!name?.trim()) return state; // ignore empty names
      const newTodo = {
        id: Date.now(),
        name: name.trim(),
        description: (description || "").trim(),
        isComplete: false,
        
      };
      return { ...state, todos: [newTodo, ...state.todos] };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

// state = {
//     working:true,
//     todos:[{id:1,name:"erty",description:"dfghjk",isComplete:false}]
// }

// newTodo = {id:2,name:"erty erty",description:" df dfgh gh dfghjk",isComplete:false}
