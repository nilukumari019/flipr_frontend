import React, { useState } from "react";
import "./Signup.scss";
import { signup } from "../components/http_request";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [show, setShow] = useState(false);

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    value={formData.name}
                    onInput={(e) =>
                        setFormData((t) => {
                            return { ...t, name: e.target.value };
                        })
                    }
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    value={formData.email}
                    onInput={(e) =>
                        setFormData((t) => {
                            return { ...t, email: e.target.value };
                        })
                    }
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type={show ? "text" : "password"}
                    value={formData.password}
                    onInput={(e) =>
                        setFormData((t) => {
                            return { ...t, password: e.target.value };
                        })
                    }
                    required
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type={show ? "text" : "password"}
                    value={formData.confirmPassword}
                    onInput={(e) =>
                        setFormData((t) => {
                            return { ...t, confirmPassword: e.target.value };
                        })
                    }
                    required
                />
                <div className="check">
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={() => setShow((t) => !t)}
                    />
                    &nbsp;
                    <span>Show Password</span>
                </div>

                <button onClick={signup} type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
