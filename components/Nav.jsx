import React from 'react'

export const Nav = ({children}) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Tienda</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
      <div className="container">
      {children}
        </div>
      
    </div>
  )
}
