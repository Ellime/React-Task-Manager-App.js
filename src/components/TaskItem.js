import React from 'react';
import { Checkbox } from '@cdk-uip/react-checkbox'; // CDK React component. From CDK Global.
import { TextField } from '@cdk-uip/react-text-field'; // CDK React component. From CDK Global.

// TaskItem component. Defines the appearance of a task.
const TaskItem = props => (

      <div> {/* All tags within the return body must be enclosed within one tag. */}

          <Checkbox
            checked = { props.task.checked } // The task.checked is provided from TaskList.
            onChange = { event => props.changeCheck(props.index, event.target.checked) } // The method changeCheck is provided from TaskList.
          />

          <TextField
            label = "Enter a task" // Text that is displayed in/above the input box.
            value = { props.task.task }
            disabled = { props.task.checked } // 'disabled' is on when the task is checked.
            onChange = { event => props.changeTask(props.index, event.target.value) } // As text is changed, the value of the task also change.
          />

      </div>

);

export default TaskItem;
