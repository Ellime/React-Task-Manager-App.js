import React from 'react';
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid"; // CDK React component. From CDK Global.
import { Button } from '@cdk-uip/react-button'; // CDK React component. From CDK Global.
import TaskItem from './TaskItem';

// Blank task object.
const taskReset = {
  checked: false,
  task: ""
}

export default class TaskList extends React.Component {
  constructor(props) {
    super(props) // Required to this method with the same parameters as the constructor.
    this.state = {
      tasks: [taskReset] // Initialize array with one empty task.
    }
    this.changeCheck = this.changeCheck.bind(this)
    this.changeTask = this.changeTask.bind(this)
  }

  // Copies of objects in JS are passed by reference.
  // Converts objects to strings (passed by value) and parses through each.
  deepCopy(tasks) {
    return JSON.parse(JSON.stringify(tasks))
  }

  // Use deep copying to update the tasks array with the modified task (a checked or unchecked task). A task's checked is set to a boolean value.
  // Parameters: Integer index and boolean value.
  changeCheck(index, value) {
    let tasksTemp = this.deepCopy(this.state.tasks)
    tasksTemp[index].checked = value
    this.setState({ tasks: tasksTemp })
  }

  // Use deep copying to update the tasks array with the modified task (a checked or unchecked task). A task's text is modified.
  // Parameters: Integer index and boolean value.
  changeTask(index, value) {
    let tasksTemp = this.deepCopy(this.state.tasks)
    tasksTemp[index].task = value
    this.setState({ tasks: tasksTemp })
  }

  render() {
    return (
      <LayoutGrid> {/* LayoutGrid is composed of LayoutGridCell components adding to span = 12. */}

        <LayoutGridCell span = {12}>
          {
            this.state.tasks.map((task, index) => ( // map() is called on an array. Used to transform one array into another.
              <LayoutGridCell span = {12} key = {index}> {/* The key is set to an index. The indicies between components must be unique.*/}
                <TaskItem
                  task = {task}
                  changeCheck = {this.changeCheck} // Instance of changeCheck().
                  changeTask = {this.changeTask} // Instance of changeTask().
                  index = {index}
                /> {/* Assigning variables and methods from this file to TaskItem's props. */}
              </LayoutGridCell>
            ))
          }
        </LayoutGridCell>

        <br/>

        <LayoutGridCell span = {12}>

          <Button
            onClick = { () =>
              this.setState(state => ({ tasks: state.tasks.concat([taskReset]) } ))
            } // Button causes a task to be added to the tasks array.
          >
            Enter
          </Button>
        </LayoutGridCell>

      </LayoutGrid>
    );
  }
}
