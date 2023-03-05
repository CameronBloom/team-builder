import './App.css';
import { useState } from 'react';
import Form from './components/Form';

export default function App() {

  const defaultTeamData = [
    { name: "one", email: "one@email.com", role: "backend engineer"},
    { name: "two", email: "two@email.com", role: "frontend engineer"},
    { name: "three", email: "three@email.com", role: "designer"},
    { name: "four", email: "four@email.com", role: "analyst"},
  ]

  const defaultFormValues = { name: "", email: "default@email.com", role: "" }

  const [teamData, setTeamData] = useState(defaultTeamData);
  const [formValues, setFormValues] = useState(defaultFormValues);

  const onChange = (name, value) => {
    // spread out values and adjust the key value pair
    setFormValues({ ...formValues, [name]: value })
  }
  
  const onSubmit = () => {
    setTeamData([formValues, ...teamData]);
    setFormValues(defaultFormValues)

  }

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={onChange}
        submit={onSubmit}
      />
      {teamData.map((teammate, idx) => {
        return (
          <div className="list" key={idx} >
            <div>{teammate.name}</div>
            <div>{teammate.email}</div>
            <div>{teammate.role}</div>
          </div>

        )
      })}
    </div>
  );
}
