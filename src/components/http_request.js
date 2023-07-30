import { authActions } from "../store";

export const login = async (setError, input, dispatch, redirect) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
        });
        const response = await res.json();

        if (response.success) {
            const date = new Date();
            date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${
                response.token
            };expires=${date.toUTCString()};path=/`;
            dispatch(authActions.login(response.user));
            redirect("/");
        } else {
            setError(response.error);
        }
    } catch (err) {
        console.log(err);
    }
};

export const signup = async (formData, redirect, dispatch, set) => {
    if (formData.password !== formData.confirmPassword) {
        set({
            name: "",
            phoneNumber: "",
            email: "",
            password: "password doesnot match",
        });
        return;
    }
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const response = await res.json();
        console.log(response);
        if (!response.success) {
            set(response.error);
        } else {
            dispatch(
                authActions.login({
                    email: response.user.email,
                    name: response.user.name,
                })
            );
            const date = new Date();
            date.setTime(date.getTime() + 3 * 24 * 60 * 60 * 1000);
            document.cookie = `jwt=${
                response.token
            };expires=${date.toUTCString()};path=/`;
            redirect("/");
        }
    } catch (err) {
        alert(err);
    }
};

export const logout = (dispatch) => {
    document.cookie = `jwt=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; `;
    dispatch(authActions.logout());
};


