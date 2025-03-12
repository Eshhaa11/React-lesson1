import FormComponent from "./Components/FormComponent.js";
import LogInComponent from "./Components/LogInComponent.js";

const App = () => {
    const handleForm = (e) => {
        const btnName = e.target.value;
        console.log(btnName)
    }
  return (
    <div>
      <button onClick={handleForm} value="register">Register</button>
      <button onClick={handleForm} value="login">Login</button>
      
      
      <FormComponent />
      <LogInComponent />
    </div>
  );
}

export default App;