import React from 'react'

export const Footer = () => {
  return (
   
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">&copy; Sakura Arte en Papel</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width="40" height="32"><use link="#bootstrap"/></svg>
    </a>

     <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/Agendas" className="nav-link px-2 text-body-secondary">Agendas</a></li>
      <li className="nav-item"><a href="/Cuadernos" className="nav-link px-2 text-body-secondary">Cuadernos</a></li>
      <li className="nav-item"><a href="/Calendarios" className="nav-link px-2 text-body-secondary">Calendarios</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>

  </footer>
</div>
  )
}
export default Footer