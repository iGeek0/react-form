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
              <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={handleInputChange}
                value={formulario.email}
                name='email'
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
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
