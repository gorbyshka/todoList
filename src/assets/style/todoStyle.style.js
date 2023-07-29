import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

  max-width: 600px;
  margin: 0 auto;
  padding: 20px;

`;

export const Title = styled.h2`

  color: #007bff;
  text-align: center;
  margin-bottom: 20px;

`;

export const List = styled.ul`

  list-style-type: none;
  padding: 0;

`;

export const Form = styled.form`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

export const Input = styled.input`

  width: 200px;
  height: 30px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #007bff;
  border-radius: 15px;
  text-align: center;
  outline: none;

`;

export const Button = styled.button`

  width: 100px;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }

`;

export const TodoItem = styled.li`

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  list-style-type: none;
  border: 1px solid #007bff;
  padding: 10px;
  gap: 10px;
  background-color: #f0f0f0;

`;

export const ButtonsContainer = styled.div`

  display: flex;
  margin-top: 20px;     

`;

export const CenteredContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

`;

export const ListItem = styled.li`

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: auto;
  border: 1px solid #007bff;
  padding: 10px;
  gap: 10px;
  margin-bottom: 10px;
  background-color: #f0f0f0;

`;

export const LinkButton = styled(Link)`

  display: block;
  text-align: center;
  background-color: #007bff;
  width: 120px;
  color: #fff;
  padding: 8px 16px;
  border: none;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }

`;
 
export const Strong = styled.strong``;
