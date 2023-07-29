import React from "react";
import { useState } from "react";
import { validation } from './validation';
import "./form.css";

function Form({ login }) {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [errors, setError] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    login(data);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });

    setError(validation({
      ...data,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className='containerForm'>
      <div className='login'>
        <div className='avatar'></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
          </div>
          <div>
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              onChange={handleChange}
              name="password"
              value={data.password}
            />
          </div>
          <div>
            {errors.password && <span>{errors.password}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;