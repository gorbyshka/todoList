import PropTypes from 'prop-types';

export const TodoListPropTypes = {

  completedTodos: PropTypes.array.isRequired,
  setCompletedTodos: PropTypes.func.isRequired,
  
};
