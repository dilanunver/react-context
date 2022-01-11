import React from 'react'
import SwitchTheme from './SwitchTheme';
import { MainContext, useContext } from '../context';

const Footer = () => {
  const { person, setPerson } = useContext(MainContext)

  const switchPerson = () => {
    setPerson(person === 'dilan' ? 'gokhan' : 'dilan')
  }

  return (
    <div>
      footer component
      <SwitchTheme></SwitchTheme>
      <button onClick={switchPerson}>Switch Person</button>
    </div>
  )

}

export default Footer;