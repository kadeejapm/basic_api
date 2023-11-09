
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import Home from './Home';


function App() {
  const [data, setData] = useState([]);

  const fetchData = async() => {
    try{
      const response = await 
      fetch('https://fakestoreapi.com/products');

      const toCOnverJSON = await
       response.json();

      setData(toCOnverJSON);
    }catch(error){
      console.log(error, 'error');
    }

  };

  useEffect(() =>{
    fetchData();

  },[]);


  return (
    <>
    {data.map((item) => {

    
      return (
        <>
        <img src={item.image} alt="" width={'200px'}/>
        <p>{item.category}</p>
    </>
  );

      })}
    <Home/>
 

  

    </>
  );
}

export default App
