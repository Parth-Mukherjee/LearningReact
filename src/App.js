import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';
import React,{useState} from 'react'



function App() {

  const[mode,setMode] = useState('light');
  const toggleMode =() =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#142d58'
     // document.body.style.color = 'white'
    }
   else
      {
        setMode('light');
        document.body.style.backgroundColor = 'white'
       // document.body.style.color = 'black'
      }
  } 

  return (
    <>
  <Navbar title="TextUtils" About="About Us" mode = {mode} toggleMode = {toggleMode}></Navbar>
  <div className='container my-3'>
  <TextForm heading="Enter your text to analyze" mode = {mode}></TextForm> 
  {/* <About></About> */}
  </div>
   </>
  );
}

export default App;
