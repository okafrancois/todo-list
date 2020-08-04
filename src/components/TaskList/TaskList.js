import React, {Component} from 'react';
import styled from "styled-components";
import TaskItem from "./TaskItem/TaskItem";

class TaskList extends Component {
    deleteTask = (itemId) => {
        console.log(itemId)
        const updatedTasks = this.state.tasks.splice(itemId-1, 1);
        this.setState({tasks: updatedTasks})
    };

    addTask = event => {
        event.preventDefault();
        this.setState({tasks: [...this.state.tasks, this.state.taskInput]})
    };

    handleInput = event => {
        this.setState({taskInput: event.target.value});
    }

    constructor(props) {
        super(props);
        this.state = {
            taskInput: "",
            tasks: [
                "task 1",
                "task 2"
            ]
        }
    }

    render() {
        const tasks = this.state.tasks
        return (
            <Container>
                <h1>Todo list</h1>
                <form onSubmit={this.addTask}>
                    <label>
                        <input type="text" value={this.state.taskInput} onChange={this.handleInput} />
                    </label>
                    <input type="submit" value="ajouter" />
                </form>
                <TasksWrapper>
                    {tasks.map((task, id) => (
                        <TaskItem key={id} id={id} title={task} onDel={this.deleteTask}/>
                    ))}
                </TasksWrapper>
            </Container>
        );
    }
}

const Container = styled.div`
        display: flex;
        min-height: 100vh;
        min-width: 100vw;
        align-items: center;
        flex-direction: column;
        background: #e8c021;
        `

const TasksWrapper = styled.section`
        padding: 1em;
        max-width: 90vw;
        display: flex;
        flex-direction: column;
        `

export default TaskList;
