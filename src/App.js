import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title= "TextUtils - Dark Mode";
      // dynamic title
      // setInterval(() => {
      //   document.title= "TextUtils is amazing mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title= "Install TextUtils";
      // }, 1500);
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar /> for default */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;