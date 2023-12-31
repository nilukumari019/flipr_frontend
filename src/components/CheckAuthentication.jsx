import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";

const CheckAuthentication = ({ children, required = false, r = false }) => {
    const state = useSelector((state) => state.isAuthenticated);
    const dispatch = useDispatch();
    const redirect = useNavigate();

    useEffect(() => {
        const f = async () => {
            const cookie = document.cookie
                .split("; ")
                .find((row) => row.startsWith("jwt="))
                ?.split("=")[1];
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_BACKEND}/isloggedin`,
                    {
                        method: "POST",
                        headers: {
                            Authorization: `bearer ${cookie}`,
                        },
                    }
                );
                const response = await res.json();
                console.log(res.ok);
                if (res.ok) {
                    if (response.success) {
                        dispatch(authActions.login(response.user));
                        if (r) {
                            redirect("/");
                        }
                    }
                } else if (required) {
                    redirect("/login");
                }
            } catch (err) {
                console.log(err);
                if (err.code === 404) {
                    redirect("/login");
                }
            }
        };
        if (!state) {
            f();
        }
    }, []);
    return <>{children}</>;
};

export default CheckAuthentication;
