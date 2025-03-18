import './App.css';
import FormComponent from './Components/FormComponent';
import LogInComponent from './Components/LogInComponent';
import { useState } from 'react';
import HeaderComponent from './Components/HeaderComponent';

function App() {
  const [formState, setFormState] = useState("register");

  const handleForm = (e) => {
    const btnName = e.target.value;
    setFormState(btnName);
    console.log(`Switching to: ${btnName}`); 
  };

  return (
    <div>
      <HeaderComponent />
      <div className='tab-container' style={{ marginBottom: '20px' }}>
        <button className="btn" value="register" onClick={handleForm}>REGISTER</button>
        <button className="btn" value="login" onClick={handleForm}>LOGIN</button>
      </div>
      {formState === "register" ? <FormComponent /> : <LogInComponent />}
    </div>
  );
}

export default App;
