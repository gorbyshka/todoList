import React, { useState } from 'react';

import { Provider } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { TodoList } from './components/todoList';

import { CompletedTasks } from './components/completedTask';

import store from './store/store';

export const App = () => {

  const [completedTodos, setCompletedTodos] = useState([]);

  return (

    <Provider store={store}>

      <BrowserRouter>

        <Routes>

          <Route
            exact
            path="/"
            element={

              <TodoList
                completedTodos={completedTodos}
                setCompletedTodos={setCompletedTodos}
              />

            }
          />

          <Route
            path="/completed"
            element={

              <CompletedTasks
                completedTodos={completedTodos}
              />

            }
          />

        </Routes>

      </BrowserRouter>

    </Provider>

  );

};
