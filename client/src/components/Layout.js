import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
  return (
    <div className='bg-light'>
        <Header/>
        <div className="child">{props.children}</div>
        <Footer/>
    </div>
  )
}

export default Layout