import React from 'react';
import { MainContext, useContext } from '../context';

const Header = () => {

  const { theme, person } = useContext(MainContext)
  return (
    <div>
      <h3>{person}</h3>
      current theme = {theme}
    </div>
  )

}

export default Header;