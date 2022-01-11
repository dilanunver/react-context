import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import React, { useState } from 'react';
import { MainContext } from './context';

function App() {
  const [person, setPerson] = useState('dilan')
  const [theme, setTheme] = useState('light')

  const data = {
    theme,
    setTheme,
    person,
    setPerson
  }
  return (
    <MainContext.Provider value={data} >
      <Header></Header>
      <Footer></Footer>

    </MainContext.Provider>
  );
}

export default App;
