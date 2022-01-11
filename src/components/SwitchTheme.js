import React from "react";
import { MainContext, useContext } from "../context";



const SwitchTheme = () => {
  const { theme, setTheme } = useContext(MainContext)

  const changeColor = () => {
    if (theme === 'light') {

      setTheme('dark')
      document.body.style.color = '#fff';
      document.body.style.backgroundColor = '#234786';

    } else {
      setTheme('light')
      document.body.style = 'background :#fff'
    }

  }
  return (
    <button onClick={changeColor}>Switch Theme</button>
  )

}

export default SwitchTheme;
