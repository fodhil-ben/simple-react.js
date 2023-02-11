// src/App.jsx
import React, { useState, useEffect } from 'react'
import Table from './comp/table'
import Form from './comp/form'

// src/App.jsx




  const App = () => {
    const initialState = [
        {
          name: "Charlie",
          job: "Janitor",
        },
        {
          name: "Mac",
          job: "Bouncer",
        },
        {
          name: "Dee",
          job: "Aspring actress",
        },
        {
          name: "Dennis",
          job: "Bartender",
        },
      ];
      const [state, setState] = useState(initialState);
      const removeEmployee = (index) => {
        setState(
          state.filter((emp, i) => {
            return i !== index;
          })
        );
      };
      // src/App.jsx
        const handleSubmit = (employee) => {
            setState([...state, employee]);
        };


    
      return (
        <div className="container">
            <Table employeeData={state} removeEmployee={removeEmployee} />
            <Form handleSubmit={handleSubmit} />
        </div>
    )
  }

export default App