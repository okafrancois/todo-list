import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const TaskItem = ({title, id, onDel, onComplete}) => {
    return (
       <TaskBox>
           <CompleteBtn/>
           <TaskTitle>{title}</TaskTitle>
          <CloseBtn onClick={() => onDel(id)}>X</CloseBtn>
       </TaskBox>
    );
};

const TaskBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #fff;
    border-radius: 50px;
    margin-top: 0.5rem;
    `
const CloseBtn = styled.span`
    color: red;
    font-size: 1rem;
    cursor: pointer;
    `
const CompleteBtn = styled.input.attrs(props => ({
    // we can define static props
    type: "checkbox",
}))`
    cursor: pointer;
    `
const TaskTitle = styled.span`
    font-size: 1rem;
    margin: 0 1rem;
    `

TaskItem.propTypes = {
};

export default TaskItem;
