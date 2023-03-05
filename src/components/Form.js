import { useEffect } from "react";

export default function Form(props) {

  const { values, setValues, change, submit, edit } = props

  useEffect(() => {
    setValues(edit);
  })

  const handleChange = event => {
    const { name, value } = event.target;
    change(name, value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    submit();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <label>Employee Name:&nbsp;
            <input 
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </label>
          <label>Employee Email:&nbsp;
            <input 
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </label>
          <label>Employee Role:&nbsp;
            <input 
              type="text"
              id="role"
              name="role"
              list="roles"
              value={values.role}
              onChange={handleChange}
            />
          </label>
          <datalist id="roles">
            <option value="backend engineer" />
            <option value="frontend engineer" />
            <option value="designer" />
            <option value="analyst" />
          </datalist>
        </div>
        <div className="right">
          <input 
            type="submit"
            value="Add Member"
          />
        </div>

      </form>
    </>
  )
}