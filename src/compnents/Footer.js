import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          {/* Content for Link */}
        </Link>
        <span className="text-muted">© 2024 Food Place</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><Link className="text-muted" to="#">Refund Rules</Link></li>
        <li className="ms-3"><Link className="text-muted" to="#">Privacy & Policy</Link></li>
        <li className="ms-3"><Link className="text-muted" to="#">Contact us</Link></li>
      </ul>
    </footer>
  )
}
