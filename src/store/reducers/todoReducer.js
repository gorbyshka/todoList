const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {

    switch (action.type) {
      
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };

      case 'UPDATE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.index ? action.payload.updatedTodo : todo
          ),
        };

      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload),
        };

      default:
        return state;
    }

  };
  
  export default todoReducer;
  