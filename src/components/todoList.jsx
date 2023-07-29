import {
  Container,
  Title,
  Form,
  Input,
  Button,
  CenteredContainer,
  LinkButton,
  ButtonsContainer,
  Strong,
  List,
  TodoItem
} from '../assets/style/todoStyle.style';

import { TodoListPropTypes } from '../proptypes/todoListPropTypes';

import { inputFields } from './inputFields';
import { buttonsTodo } from './buttonsTodo';

import { useTodoList } from '../helpers/todoHelpers';

export const TodoList = ({ completedTodos, setCompletedTodos }) => {

  const {
    formData,
    editingIndex,
    searchQuery,
    handleInputChange,
    handleAddTodo,
    handleSearchChange,
    filteredTodos,
    handleButtonAction,
  } = useTodoList({ completedTodos, setCompletedTodos });

  return (

    <Container>

      <Title>

        Todo List

      </Title>

      <Form>

        {inputFields.map((inputField) => (

          <Input
            key={inputField.name}
            type="text"
            name={inputField.name}
            value={formData[inputField.name]}
            onChange={handleInputChange}
            placeholder={inputField.placeholder}
          />

        ))}

        <Button onClick={handleAddTodo}>

          {editingIndex !== null ? 'Edit' : 'Add'}

        </Button>

      </Form>

      <CenteredContainer>

        <Input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <List>

          {filteredTodos.map((todo, index) => (

            <TodoItem key={index}>

              <Strong>

                {todo.title}

              </Strong>

              {todo.description}

              {' '}

              ({' '} Data: {todo.dueDate} {' '})

              {!todo.completed && (

                <ButtonsContainer>

                  {buttonsTodo.map((btn) => (

                    <Button
                      key={btn.label}
                      onClick={() => handleButtonAction(btn.action, index)}
                    >

                      {btn.label}

                    </Button>

                  ))}

                </ButtonsContainer>

              )}

            </TodoItem>

          ))}

        </List>

        {completedTodos.length > 0 && (

          <>

            <LinkButton to="/completed">

              View Completed

            </LinkButton>

          </>

        )}

      </CenteredContainer>

    </Container>

  );

};

TodoList.propTypes = TodoListPropTypes;
