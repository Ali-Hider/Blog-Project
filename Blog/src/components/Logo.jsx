import React from 'react'
import logo from './logo1.jpg'  // <-- updated filename

function Logo({ width = '50px' }) {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width }} />
    </div>
  )
}

export default Logo

