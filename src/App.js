import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {

  const dummyData = [
    { name: "one", email: "one@email.com", role: "backend engineer"},
    { name: "two", email: "two@email.com", role: "frontend engineer"},
    { name: "three", email: "three@email.com", role: "designer"},
    { name: "four", email: "four@email.com", role: "analyst"},
  ]

  const [teamData, setTeamData] = useState(dummyData);

  return (
    <div className="App">
      <form>
        <label>Employee Name:&nbsp;
          <input 
            type="text"
            name="username"
            value=""
          />
        </label>
        <label>Employee Email:&nbsp;
          <input 
            type="email"
            id="email"
            name="email"
            value=""
            onChange=""
          />
        </label>
        <label>Employee Role:&nbsp;
          <input 
            type="text"
            id="role"
            name="role"
            list="roles"
            value=""
          />
        </label>
        <datalist id="roles">
            <option value="backend engineer" />
            <option value="frontend engineer" />
            <option value="designer" />
            <option value="analyst" />
          </datalist>

      </form>
      {teamData.map(teammate => {
        return (
          <div className="list">
            <div>{teammate.name}</div>
            <div>{teammate.email}</div>
            <div>{teammate.role}</div>
          </div>

        )
      })}
    </div>
  );
}
