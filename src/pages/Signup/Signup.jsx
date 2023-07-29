import React, { useState } from "react";
import "./Signup.scss";
import { signup } from "../../components/http_request";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: 0,
        password: "",
        confirmPassword: "",
    });

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const redirect = useNavigate();

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
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="number"
                    min={1000000000}
                    max={9999999999}
                    value={formData.phoneNumber}
                    onInput={(e) =>
                        setFormData((t) => {
                            return { ...t, phoneNumber: e.target.value };
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

                <button
                    onClick={signup.bind(null, formData, redirect, dispatch)}
                    type="submit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
