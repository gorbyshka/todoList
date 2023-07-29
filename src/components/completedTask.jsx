import {
    Container,
    Title,
    List,
    ListItem,
    Strong,
    CenteredContainer,
    LinkButton
} from '../assets/style/todoStyle.style';

import { CompletedPropTypes } from '../proptypes/completedPropTypes';

export const CompletedTasks = ({ completedTodos }) => {

    return (

        <Container>

            <CenteredContainer>

                <Title>

                    Completed Tasks

                </Title>

                <List>

                    {completedTodos.map((completedTodo, index) => (

                        <ListItem key={index}>

                            <Strong>

                                {completedTodo.title}

                            </Strong>

                            {completedTodo.description}

                            {' '}

                            ({' '} Data: {completedTodo.dueDate} {' '})

                        </ListItem>

                    ))}

                </List>

                <LinkButton to="/">

                    Go Back

                </LinkButton>

            </CenteredContainer>

        </Container>

    );

};

CompletedTasks.propTypes = CompletedPropTypes;
