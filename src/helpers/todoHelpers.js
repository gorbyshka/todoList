import {
    useState,
    useCallback,
    useMemo
} from 'react';

import {
    useSelector,
    useDispatch
} from 'react-redux';

import {
    addTodo,
    updateTodo,
    deleteTodo
} from '../store/actions/todoActions';

export const useTodoList = ({ completedTodos, setCompletedTodos }) => {

    const [formData, setFormData] = useState({
        newTodo: '',
        description: '',
        dueDate: '',
    });

    const [editingIndex, setEditingIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = useCallback((event) => {

        const { name, value } = event.target;

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

    }, []);

    const handleAddTodo = useCallback((event) => {

        event.preventDefault();

        const { newTodo, description, dueDate } = formData;

        if (newTodo.trim() !== '' && description.trim() !== '' && dueDate.trim() !== '') {

            const newTask = {

                title: newTodo,
                description: description,
                dueDate: dueDate,
                completed: false,

            };

            if (editingIndex !== null) {

                dispatch(updateTodo(editingIndex, newTask));
                setEditingIndex(null);

            } else dispatch(addTodo(newTask));


            setFormData({
                newTodo: '',
                description: '',
                dueDate: '',
            });

        }

    }, [formData, editingIndex, dispatch]);

    const handleEditTodo = useCallback((index) => {

        const taskToEdit = todos[index];

        setFormData({
            newTodo: taskToEdit.title,
            description: taskToEdit.description,
            dueDate: taskToEdit.dueDate,
        });

        setEditingIndex(index);

    }, [todos]);

    const handleDeleteTodo = useCallback((index) => {

        dispatch(deleteTodo(index));
        setEditingIndex(null);

    }, [dispatch]);

    const handleCompleteTodo = useCallback((index) => {

        const taskToComplete = todos[index];

        const completedTask = { ...taskToComplete, completed: true };

        setCompletedTodos((prevCompletedTodos) => [...prevCompletedTodos, completedTask]);

        dispatch(deleteTodo(index));

    }, [todos, setCompletedTodos, dispatch]);

    const handleSearchChange = useCallback((event) => setSearchQuery(event.target.value), []);

    const filteredTodos = useMemo(() => {

        const lowerSearchQuery = searchQuery.toLowerCase();

        return todos.filter(

            (todo) =>

                todo.title.toLowerCase().includes(lowerSearchQuery) ||
                todo.description.toLowerCase().includes(lowerSearchQuery) ||
                todo.dueDate.toLowerCase().includes(lowerSearchQuery)
        );

    }, [todos, searchQuery]);

    const handleButtonAction = useCallback((action, index) => {

        switch (action) {

            case 'edit': handleEditTodo(index); break;

            case 'delete': handleDeleteTodo(index); break;

            case 'complete': handleCompleteTodo(index); break;

            default: break;

        }

    }, [handleEditTodo, handleDeleteTodo, handleCompleteTodo]);

    return {

        formData,
        editingIndex,
        searchQuery,
        todos,
        handleInputChange,
        handleAddTodo,
        handleEditTodo,
        handleDeleteTodo,
        handleCompleteTodo,
        handleSearchChange,
        filteredTodos,
        handleButtonAction,
    };

};
