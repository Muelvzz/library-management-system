import { useState } from 'react'
import '../css/nav.css'

function Navigation() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img src="./images/logo.png" alt="" />
        <ul>
          <li>LIBRARY M.S</li>
          <li>Librarian Dashboard</li>
          <li>admin</li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
