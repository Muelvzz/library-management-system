import { useState } from 'react'
import '../css/dashboard.css'
import Book from './book.jsx'
import data from './data.js'

function Dashboard() {
  const [count, setCount] = useState(0)

  const bookElements = data.map((book) => {
    return (
      <Book
        id = {book.id}
        {...book}
      />
    )
  })

  return (
    <>
      <div className="dashboard-container">
        <div>
          <ul className='dashboard-first-tab'>
            <li>Dashboard</li>
            <li>Control Panel</li>
            <li>Home</li>
            <li>Display Books</li>
          </ul>
        </div>
        <div>
          <ul className='dashboard-second-tab'>
            <li>Show Entries</li>
            <li>Search: </li>
          </ul>
        </div>

        <div className="book-container">
          {bookElements}
        </div>
      </div>
    </>
  )
}

export default Dashboard