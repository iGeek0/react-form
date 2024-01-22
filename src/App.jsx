import { useState } from 'react'
import './App.css'

function App() {
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formulario);
    /*
    Aqui podriamos enviar los datos a un servidor o a una API,
    ya estan disponibles en el objeto formulario
    */
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className="row">
          <h3>Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                onChange={handleInputChange}
                value={formulario.email}
                name='email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                onChange={handleInputChange}
                value={formulario.password}
                name='password'
              />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>

        </div>
      </div>

    </>
  )
}

export default App
