const LogInComponent = () => {
    return (
    <div>
      <h1>Login</h1>
    <form>
  
      <input type="email" id="email" name="email" required />
      <label for="email">Email:</label>
  
      <input type="password" id="password" name="password" required />
      <label for="password">Password:</label>

  
      <button type="submit">Login</button>
    </form>
    </div>
    );
  }
  
  export default LogInComponent;