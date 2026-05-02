import React from 'react'
import Navbar from '../components/(Prediction)/PreNavbar'

const layout = ({children}) => {
  return (
    <div>
      <Navbar />
        {children}
    </div>
  )
}

export default layout
