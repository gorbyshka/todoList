export const addTodo = (newTodo) => ({

    type: 'ADD_TODO',
    payload: newTodo,

  });
  
  export const updateTodo = (index, updatedTodo) => ({

    type: 'UPDATE_TODO',

    payload: {
      index,
      updatedTodo,
    },

  });
  
  export const deleteTodo = (index) => ({

    type: 'DELETE_TODO',
    payload: index,
    
  });
  