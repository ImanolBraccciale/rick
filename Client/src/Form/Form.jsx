import React from "react";
import { useState } from "react";
import { validation } from './validation';


function Form({ login }) {
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const [errors, setError] = useState({
    email: "",
    password: ""
  })
  const handleSubmit = (evento) => {
    evento.preventDefault()
    login(data)
  }

  const handleChange = (event) => {

    setData({
      ...data,
      [event.target.name]: event.target.value
    })

    setError(validation({
      ...data,
      [event.target.name]: event.target.value
    }))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={data.email}
          />
          <br />
          {errors.email && <span>{errors.email}</span>}
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={data.password}
          />
          <br />
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">Enviar</button>
        </>
      </form>

    </>
  )

}

export default Form