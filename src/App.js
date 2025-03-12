import FormComponent from "./Components/FormComponent.js";
import LogInComponent from "./Components/LogInComponent.js";

const App = () => {
    const handleForm = () => {
      console.log("Form submitted");
    };
  return (
    <div>
      <button onClick={handleForm}>Login</button>
      <button onClick={handleForm}>Register</button>
      
      <FormComponent />
      <LogInComponent />
    </div>
  );
}

export default App;