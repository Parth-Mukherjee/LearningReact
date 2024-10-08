import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import About from './Component/About';


function App() {
  return (
    <>
  <Navbar title="TextUtils" About="About Us"></Navbar>
  <div className='container my-3'>
  <TextForm heading="Enter your text to analyze"></TextForm> 
  {/* <About></About> */}
  </div>
   </>
  );
}

export default App;
