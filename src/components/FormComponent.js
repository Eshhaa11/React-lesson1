import React from 'react';
import './RegisterComponent.css';

const RegisterComponent = () => (
    <div className="register-container">
        <h1>Register</h1>

        <div className="form-grid">
            {/* Left Column */}
            <div className="form-column">
                <div className="group">
                    <label htmlFor="register-firstname" className="label">First Name</label>
                    <input
                        id="register-firstname"
                        type="text"
                        className="input"
                        placeholder="First Name"
                        required
                    />
                </div>

                <div className="group">
                    <label htmlFor="register-lastname" className="label">Last Name</label>
                    <input
                        id="register-lastname"
                        type="text"
                        className="input"
                        placeholder="Last Name"
                        required
                    />
                </div>

                <div className="group">
                    <label htmlFor="register-email" className="label">Email</label>
                    <input
                        id="register-email"
                        type="email"
                        className="input"
                        placeholder="Email Address"
                        required
                    />
                </div>
            </div>

            {/* Right Column */}
            <div className="form-column">
                <div className="group">
                    <label htmlFor="register-phone" className="label">Phone Number</label>
                    <input
                        id="register-phone"
                        type="tel"
                        className="input"
                        placeholder="Phone Number"
                        required
                    />
                </div>

                <div className="group">
                    <label htmlFor="register-pass" className="label">Password</label>
                    <input
                        id="register-pass"
                        type="password"
                        className="input"
                        placeholder="Password"
                        required
                    />
                </div>

                <div className="group">
                    <label htmlFor="register-repeat-pass" className="label">Confirm Password</label>
                    <input
                        id="register-repeat-pass"
                        type="password"
                        className="input"
                        placeholder="Confirm Password"
                        required
                    />
                </div>
            </div>
        </div>

        {/* Centered Submit Button */}
        <div className="group submit-btn">
            <button type="submit" className="button">Sign Up</button>
        </div>

        <div className="hr"></div>
    </div>
);

export default RegisterComponent;
