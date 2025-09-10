import { useState } from 'react'
import '../css/sidebar.css'

function Sidebar() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='sidebar-container'>
            <div className="sidebar-profile">
              <div className="sidebar-welcome-image">
                  <img src='/images/profile.jpg' alt="Profile Image" className='sidebar-profile'/>
              </div>
              <div className='sidebar-welcome-text'>
                  <h3>Welcome!</h3>
                  <h2>Muelvin Lopez</h2>
              </div>
            </div>
            <div className="sidebar-tabs">
                <h2>General</h2>
                <ul className='sidebar-tabs-list'>
                  <li><img src="\images\icon\dashboard.png" alt="" className='sidebar-tabs-logo' />Dashboard</li>
                  <li><img src="\images\icon\account.png" alt="" className='sidebar-tabs-logo' />Profile</li>
                  <li><img src="\images\icon\student-info.png" alt="" className='sidebar-tabs-logo' />All Student Information</li>
                  <li><img src="\images\icon\teacher-info.png" alt="" className='sidebar-tabs-logo' />All Teacher Information</li>
                  <li><img src="\images\icon\mng-book.png" alt="" className='sidebar-tabs-logo' />Manage Book</li>
                  <li><img src="\images\icon\issue-book.png" alt="" className='sidebar-tabs-logo' />Issue Book</li>
                  <li><img src="\images\icon\mng-users.png" alt="" className='sidebar-tabs-logo' />Manage Users</li>
                  <li><img src="\images\icon\issued-books.png" alt="" className='sidebar-tabs-logo' />Issued Books</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Sidebar