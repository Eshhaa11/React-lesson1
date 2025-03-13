import React from 'react';
import './LogInComponent.css';

const LogInComponent = () => {
    return (
        <div className="login-container">
            <h1>Login</h1>
            <form>
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>

            <p className="switch-text">
                Don't have an account?  
                <a href="/register" className="link-btn">Register</a>
            </p>
        </div>
    );
};

export default LogInComponent;
