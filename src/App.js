import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500);
  }, [])
  return (
    <Loading loading={isLoading}>
      <Outlet></Outlet>
      <Footer></Footer>
    </Loading>
  )
}

export default App;
