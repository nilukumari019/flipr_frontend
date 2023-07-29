import React, { useState } from "react";
import "./login.scss";
import { login } from "../components/http_request";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [show, setShow] = useState(false);

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
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

                <div className="check">
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={() => setShow((t) => !t)}
                    />
                    <span> Show Password</span>
                </div>

                <div className="box">
                    <button type="submit" onClick={login}>
                        Login
                    </button>
                    <button
                        type="reset"
                        onClick={() => setFormData({ email: "", password: "" })}
                    >
                        reset
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
