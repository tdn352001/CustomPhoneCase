import Contacts from './contacts'
import Copyright from './copyright'
import SubcribeBox from './subcribe-box'
import React from 'react'

const Footer = () => {
  return (
    <footer className="container pt-10 pb-2 lg:pt-20">
      <SubcribeBox />
      <Contacts />
      <Copyright />
    </footer>
  )
}

export default Footer
