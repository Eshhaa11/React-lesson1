import FormComponent from "./Components/FormComponent.js";
import LogInComponent from "./Components/LogInComponent.js";

const App = () => {
  return (
    <div className="App">
      <button>Login</button>
      <button>Register</button>
      <FormComponent />
      <LogInComponent />
    </div>
  );
}

export default App;