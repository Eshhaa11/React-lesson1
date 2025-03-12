import { useState } from "react";
import FormComponent from "./Components/FormComponent.js";
import LogInComponent from "./Components/LogInComponent.js";

const App = () => {
    const [formState, setFormState] = useState("register");
    const handleForm = (e) => {
        const btnName = e.target.value;
        setFormState(btnName);
        console.log(formState);
    }
  return (
    <div>
      <button onClick={handleForm} value="register">Register</button>
      <button onClick={handleForm} value="login">Login</button>
      {formState === "register" ?
      <FormComponent /> :
      <LogInComponent />
      }
    </div>
  );
}

export default App;