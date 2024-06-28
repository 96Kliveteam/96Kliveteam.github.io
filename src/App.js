import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer></>
  )
}

export default App;
