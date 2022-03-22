
import Link from 'next/link'
import login from '../pages/login'
import React, { useEffect, useState } from 'react'
export const Nav = ({ children }) => {
  const [show, setShow] = useState('collapse navbar-collapse')
  const change = () => {
    if (show == 'collapse navbar-collapse') {
      setShow('collapse navbar-collapse show')
    } else {
      setShow('collapse navbar-collapse')
    }

  }
  const cerrar = () => {
    localStorage.setItem('login', 'false')
    change()
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link href='/'>
            <a className="navbar-brand" >Tienda</a>
          </Link>
          <button className="navbar-toggler" onClick={change} type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={show} id="navbarColor02">
            <ul className="navbar-nav me-auto">
              

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
